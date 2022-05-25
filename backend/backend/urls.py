from django.contrib import admin
from django.urls import path,include


urlpatterns = [

    path('admin/', admin.site.urls),

    
    #Including url endpoints from both the application
    
    path('', include('accounts.urls')),
    path('', include('library.urls')),

]
