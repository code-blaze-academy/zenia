from rest_framework import routers
from zenia_app_root.geometries_management.viewsets.prompt_viewset import MessagePromptViewset
from zenia_app_root.geometries_management.viewsets.chair import ChairViewset
router=routers.SimpleRouter()
router.register(r'prompt/message',MessagePromptViewset,basename='prompt_message')

# router.register(r'complexshapes/chair',ChairViewset,basename='complexshapes')
# router.register(r'complexshapes/chair',ChairViewset,basename='complexshapes')


urlpatterns=[
    *router.urls
]