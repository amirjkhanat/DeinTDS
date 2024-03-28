$(document).ready(function() {
    $('#domainTable').DataTable({
        "order": [[ 0, "asc" ]] // сортировка по алфавиту в первой колонке
    });

$('#addDomainForm').on('submit', function(event) {
    event.preventDefault();

    var domainName = $('#domainName').val();

    fetch(addDomainUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-CSRFToken': csrfToken
        },
        body: 'name=' + encodeURIComponent(domainName)
    })
    .then(response => response.json())
    .then(data => {
        $('#addDomainModal').modal('hide');

        var dataArray = [
            data.data[0].name,
            data.data[0].campaign,
            '<span class="' + (data.data[0].status == 'Connected' ? 'connected' : 'notConnected') + '">' + data.data[0].status + '</span>',
            data.data[0].check[0],
            data.data[0].edit[0],
            data.data[0].delete
        ];

        var table = $('#domainTable').DataTable();
        table.row.add(dataArray).draw();
    });
});

    $(document).on('click', '.check-btn', function() {
        var domainId = $(this).data('domain-id');
        var row = $(this).closest('tr');

        fetch(checkDomainUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'X-CSRFToken': csrfToken
            },
            body: 'id=' + encodeURIComponent(domainId)
        })
        .then(response => response.json())
        .then(data => {
            var statusCell = row.find('td[data-label="Status"]');
            statusCell.text(data.status);
            statusCell.removeClass('connected notconnected');
            statusCell.addClass(data.status == 'Connected' ? 'connected' : 'notconnected');
        });
    });

    $(document).on('click', '.edit-btn', function() {
        var domainId = $(this).data('domain-id');

        fetch(getDomainUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'X-CSRFToken': csrfToken
            },
            body: 'id=' + encodeURIComponent(domainId)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            $('#editDomainForm').data('domainId', data.id);
            $('#editDomainName').val(data.name);

            $('#editDomainModal').modal('show');
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    });

    $('#editDomainForm').on('submit', function(event) {
        event.preventDefault();

        var domainId = $(this).data('domainId');
        var domainName = $('#editDomainName').val();
        var row = $('#domainTable').find('tr[data-domain-id="' + domainId + '"]');

        fetch(editDomainUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'X-CSRFToken': csrfToken
            },
            body: 'id=' + encodeURIComponent(domainId) + '&name=' + encodeURIComponent(domainName)
        })
        .then(response => response.json())
        .then(data => {
            $('#editDomainModal').modal('hide');

            row.find('td[data-label="Domain Name"]').text(data.name);
        });
    });

    $(document).on('click', '.delete-btn', function() {
        var domainId = $(this).data('domain-id');
        var row = $(this).closest('tr');

        fetch(deleteDomainUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'X-CSRFToken': csrfToken
            },
            body: 'id=' + encodeURIComponent(domainId)
        })
        .then(response => response.json())
        .then(data => {
            row.remove();
        });
    });
});