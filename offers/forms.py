from django import forms
from .models import Offer, PartnerProgram
from campaigns.models import Campaign


class OfferForm(forms.ModelForm):
    partner_program = forms.ModelChoiceField(queryset=PartnerProgram.objects.all(), widget=forms.Select(attrs={'class': 'custom-input'}))

    class Meta:
        model = Offer
        fields = ['name', 'offer_type', 'partner_program', 'html_file', 'redirect_url', 'preload_url', 'action_type',
                  'action_html', 'campaign']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'custom-input'}),
            'offer_type': forms.Select(attrs={'class': 'custom-input'}),
            'html_file': forms.FileInput(attrs={'class': 'custom-input'}),
            'redirect_url': forms.URLInput(attrs={'class': 'custom-input'}),
            'preload_url': forms.URLInput(attrs={'class': 'custom-input'}),
            'action_type': forms.Select(attrs={'class': 'custom-input'}),
            'action_html': forms.Textarea(attrs={'class': 'custom-input'}),
            'campaign': forms.Select(attrs={'class': 'custom-input'}),
        }