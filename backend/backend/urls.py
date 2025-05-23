"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from attendance import views

router = DefaultRouter()
router.register(r'sessions', views.SessionViewSet)
router.register(r'attendance', views.AttendanceViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/sessions/', views.get_sessions, name='get_sessions'),
    path('api/attendance/', views.register_attendance, name='register_attendance'),
    path('api/sessionswithattendance/', views.get_sessions_with_attendance, name='get_sessions_with_attendance'),
    path('api/sessions/<int:session_id>/', views.get_session_by_id, name='get_session_by_id'),
    path('api/sessions/create/', views.create_session, name='create_session'),
]
