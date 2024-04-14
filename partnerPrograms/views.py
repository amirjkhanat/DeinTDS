from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import PartnerProgram
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

@csrf_exempt
@login_required
def partner_program_list(request):
    partner_programs = PartnerProgram.objects.all()
    return render(request, 'partner_program_list.html', {'partner_programs': partner_programs})

@csrf_exempt
@login_required
def add_partner_program(request):
    if request.method == 'POST':
        partner_program_name = request.POST.get('name')
        partner_program = PartnerProgram.objects.create(name=partner_program_name)
        return JsonResponse({'id': partner_program.id, 'name': partner_program.name})

@csrf_exempt
@login_required
def edit_partner_program(request):
    if request.method == 'POST':
        partner_program_id = request.POST.get('id')
        partner_program_name = request.POST.get('name')
        partner_program = PartnerProgram.objects.get(id=partner_program_id)
        partner_program.name = partner_program_name
        partner_program.save()
        return JsonResponse({'id': partner_program.id, 'name': partner_program.name})

@csrf_exempt
@login_required
def delete_partner_program(request):
    if request.method == 'POST':
        partner_program_id = request.POST.get('id')
        partner_program = PartnerProgram.objects.get(id=partner_program_id)
        partner_program.delete()
        return JsonResponse({'id': partner_program_id})