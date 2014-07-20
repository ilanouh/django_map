from django import forms

class MyForm(forms.Form):
	adress = forms.CharField(max_length=200)