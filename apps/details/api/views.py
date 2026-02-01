from django.http import HttpResponse

def details(request):
    return HttpResponse("Hi, this is details section. Thank you!")