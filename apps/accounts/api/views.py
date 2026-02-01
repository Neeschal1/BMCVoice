from django.http import HttpResponse
from django.contrib.auth.models import User
from rest_framework.views import APIView
from .serializers import *
from ..services.signup import signup_an_account


# View for creating user accounts
class UserAccountSignupSerializersCreateView(APIView):
    def post(self, request):
        serializer = UserAccountSignupSerializers(data = request.data)
        serializer.is_valid(raise_exception=True)
        return signup_an_account(serializer)
        
    
# # View for listing user accounts
# class UserAccountSignupSerializersListView(generics.ListAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserAccountSignupSerializers
    
# # View for deleting user account
# class UserAccountSignupSerializersDestroyView(generics.DestroyAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserAccountSignupSerializers


def account(request):
    return HttpResponse("Hi, this is account section. Thank you!")