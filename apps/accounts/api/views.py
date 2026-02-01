from django.http import HttpResponse

def account(request):
    return HttpResponse("Hi, this is account section. Thank you!")