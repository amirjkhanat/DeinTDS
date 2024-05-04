$(document).ready(function() {
    function hideAllFields() {
        $('#html_file_field').hide();
        $('#redirect_url_field').hide();
        $('#preload_url_field').hide();
        $('#action_type_field').hide();
        $('#action_html_field').hide();
        $('#campaign_field').hide();
    }

function showFieldsBasedOnOfferType(offerType) {
    if (offerType == 'html_file') {
        $('#html_file_field').show();
    } else if (offerType == 'redirect') {
        $('#redirect_url_field').show();
    } else if (offerType == 'preload') {
        $('#preload_url_field').show();
    } else if (offerType == 'action') {
        $('#action_type_field').show();
    }
    $('#partner_program_field').show(); // Добавьте эту строку
}

function showFieldsBasedOnActionType(actionType) {
    if (actionType == 'html') {
        $('#action_html_field').show();
    } else if (actionType == 'redirect') {
        $('#campaign_field').show();
    }
    $('#partner_program_field').show(); // Добавьте эту строку
}

    $('select[name="offer_type"]').on('change', function() {
        hideAllFields();
        showFieldsBasedOnOfferType(this.value);
        $('#action_type').trigger('change');
    }).trigger('change');

    $('#action_type').on('change', function() {
        $('#action_html_field').hide();
        $('#campaign_field').hide();
        showFieldsBasedOnActionType(this.value);
    }).trigger('change');

    $('#offerTable').DataTable({
        "order": [[ 0, "asc" ]]
    });

$('#addOfferForm').on('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);
    var addOfferUrl = document.body.dataset.addOfferUrl; // Изменено здесь
    var csrfToken = document.getElementById('csrfToken').value;
    var addOfferUrl = document.getElementById('addOfferForm').dataset.addOfferUrl;

    fetch(addOfferUrl, {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrfToken
        },
        body: formData
    }).then(response => response.json())
      .then(data => {
          location.reload();
      });
});

    $('.delete-btn').click(function() {
        var offerId = $(this).data('offer-id');
        var deleteOfferUrl = document.getElementById('deleteOfferUrl').value;
        var csrfToken = document.getElementById('csrfToken').value;

        fetch(deleteOfferUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-CSRFToken': csrfToken
            },
            body: 'id=' + encodeURIComponent(offerId)
        }).then(response => response.json())
          .then(data => {
              location.reload();
          });
    });

    $(document).on('click', '.edit-btn', function() {
    var offerId = $(this).data('offer-id');
    var getOfferUrlElement = document.getElementById('getOfferUrl');
    var editOfferUrlElement = document.getElementById('editOfferUrl');

    if (getOfferUrlElement && editOfferUrlElement) {
        var getOfferUrl = getOfferUrlElement.value.replace('0', offerId);
        var editOfferUrl = editOfferUrlElement.value.replace('0', offerId);

        $.ajax({
            url: getOfferUrl,
            type: 'GET',
            success: function(data) {
                var modal = $('#editOfferModal');
                modal.find('input[name="name"]').val(data.name);
                modal.find('select[name="offer_type"]').val(data.offer_type);
                modal.find('input[name="html_file"]').val(data.html_file);
                modal.find('input[name="redirect_url"]').val(data.redirect_url);
                modal.find('input[name="preload_url"]').val(data.preload_url);
                modal.find('select[name="action_type"]').val(data.action_type);
                modal.find('textarea[name="action_html"]').val(data.action_html);
                modal.find('select[name="campaign"]').val(data.campaign);
                modal.data('offer-id', offerId);
                modal.modal('show');

                hideAllFields();
                showFieldsBasedOnOfferType(data.offer_type);
                showFieldsBasedOnActionType(data.action_type);
            }
        });
    } else {
        console.error('Elements with id "getOfferUrl" or "editOfferUrl" not found');
    }
});

    $('#editOfferForm').submit(function(event) {
        event.preventDefault();

        var offerId = $(this).data('offer-id');
        var editOfferUrl = document.getElementById('editOfferUrl').value;
        var csrfToken = document.getElementById('csrfToken').value;

        var formData = new FormData(this);

        formData.append('partner_program', value); // Замените "value" на значение, которое вы хотите отправить

        $.ajax({
            url: editOfferUrl + offerId + '/',
            type: 'POST',
            headers: {
                'X-CSRFToken': csrfToken
            },
            processData: false,
            contentType: false,
            data: formData,
            success: function(data) {
                var table = $('#offerTable').DataTable();
                var row = table.row('[data-offer-id="' + offerId + '"]').node();
                if (row) {
                    $(row).children('td').eq(0).text(data.name);
                    $(row).children('td').eq(1).text(data.offer_type);
                    table.draw();
                } else {
                    console.error('Row with offerId ' + offerId + ' not found');
                }

                $('#editOfferModal').modal('hide');
            }
        });
    });
});