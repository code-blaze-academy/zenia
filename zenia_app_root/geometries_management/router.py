from rest_framework import routers
from zenia_app_root.geometries_management.viewsets.prompt_viewset import MessagePromptViewset
router=routers.SimpleRouter()
router.register(r'prompt/message',MessagePromptViewset,basename='prompt_message')


urlpatterns=[
    *router.urls
]