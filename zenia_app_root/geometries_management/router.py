from rest_framework import routers
from zenia_app_root.geometries_management.viewsets.prompt_viewset import MessagePromptViewset
from zenia_app_root.geometries_management.viewsets.chair import ChairViewset
from zenia_app_root.geometries_management.viewsets.hammer import HammerViewset
from zenia_app_root.geometries_management.viewsets.gear import  GearViewset
from zenia_app_root.geometries_management.viewsets.feeder import  FeederViewset
from zenia_app_root.geometries_management.viewsets.saving_box import  SavingBoxViewset
from zenia_app_root.geometries_management.viewsets.bottle import  BottleViewset
from zenia_app_root.geometries_management.viewsets.bottle import  CreateHollowBottleViewset

from zenia_app_root.geometries_management.viewsets.feeder import  CreateHollowFeederViewset
from zenia_app_root.geometries_management.viewsets.beams import  BeamsViewset
from zenia_app_root.geometries_management.viewsets.listofgeometries import  TotalListGeomeriesViewset
from zenia_app_root.geometries_management.viewsets.hammer import HammerViewset







router=routers.SimpleRouter()
router.register(r'message',MessagePromptViewset,basename='message')

router.register(r'complexshapes/hammer',HammerViewset,basename='complexshapes_hammer')
from zenia_app_root.geometries_management.viewsets.chair import  ChairViewset
router=routers.SimpleRouter()
from rest_framework import routers
router.register(r'shapes_obtainable/',TotalListGeomeriesViewset,basename='shaptesobtainer')

router.register(r'complexshapes/gear',GearViewset,basename='complexshapes_gear')
router.register(r'complexshapes/feeder',FeederViewset,basename='complexshapes_feeder')
router.register(r'complexshapes/savingbox',SavingBoxViewset,basename='complexshapes_savingbox')
router.register(r'complexshapes/bottle',BottleViewset,basename='complexshapes_bottle')


router.register(r'complexshapes/chair',ChairViewset,basename='chair')
router.register(r'complexshapes/beam',BeamsViewset,basename='beam')

router.register(r'complexshapes/hammer',HammerViewset,basename='hammer')






router.register(r'edit/hollow/complexshapes/feeder',CreateHollowFeederViewset,basename='edithollowfeeder')
router.register(r'edit/hollow/complexshapes/bottle',CreateHollowBottleViewset,basename='edithollowbottle')


urlpatterns=[
    *router.urls
]
# router.register(r'complexshapes/chair',ChairViewset,basename='complexshapes')


urlpatterns=[
    *router.urls
]