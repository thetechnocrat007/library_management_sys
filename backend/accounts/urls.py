from django.urls import path
from .views import RegisterView
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    
    #Endpoints to provide JWT token to authenticate REST API request
    
    path('api/authenticate',jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),


    
    #Endpoints to Register a new user (Sign Up)
    
    path('api/register', RegisterView.as_view(), name='register'),
    
    
]