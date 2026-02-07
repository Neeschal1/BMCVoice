from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework.permissions import IsAdminUser, AllowAny
from drf_yasg.views import get_schema_view  # type: ignore
from drf_yasg import openapi  # type: ignore
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from . import views

schema_view = get_schema_view(
    openapi.Info(
        title="BMCVoice Backend API Docs",
        default_version="v1",
        description="API documentation for BMCVoice. BMCvoice empowers you to share your voice and make a difference. ",
    ),
    public=True,
    permission_classes=(AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # For swagger documentations
    re_path(r"^docs/$", schema_view.with_ui("swagger", cache_timeout=0), name="swagger-ui"),
    re_path(r"^redoc/$", schema_view.with_ui("redoc", cache_timeout=0), name="redoc"),
    
    path('', views.home, name='home'),
    path('details/', include('apps.details.api.urls')),
]
