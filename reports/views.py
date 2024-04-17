from django.http import JsonResponse, Http404
from django.shortcuts import get_object_or_404
from .models import Click

def register_click(request, unique_id):
    # Проверяем, является ли unique_id числом
    if not unique_id.isdigit():
        raise Http404("Invalid unique_id")

    # Получаем Click по его уникальному идентификатору unique_id
    click = get_object_or_404(Click, offer_id=unique_id)

    # Обновляем поля Click
    click.ip = request.META['REMOTE_ADDR']
    # добавьте здесь обновление других полей, которые вы хотите сохранить

    try:
        # Сохраняем объект Click
        click.save()
    except Exception as e:
        # Если произошла ошибка, возвращаем сообщение об ошибке
        return JsonResponse({'error': str(e)}, status=400)

    # Если все прошло успешно, возвращаем сообщение об успехе
    return JsonResponse({'message': 'Click registered successfully'}, status=200)