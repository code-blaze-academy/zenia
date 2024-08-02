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
from zenia_app_root.geometries_management.viewsets.cuboid import CuboidViewset
from zenia_app_root.geometries_management.viewsets.cuboid import CreateHoleCuboidViewset

from zenia_app_root.geometries_management.viewsets.cone import ConeViewset
from zenia_app_root.geometries_management.viewsets.cadupload import NumberCadViewset


# from zenia_app_root.geometries_management.viewsets.door import 


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
# router.register(r'complexshapes/door',DoorViewset,basename='door')

router.register(r'basicshapes/cuboid',CuboidViewset,basename='cuboid')
router.register(r'basicshapes/cone',ConeViewset,basename='cone')
router.register(r'modify/basicshapes/numbercad',NumberCadViewset,basename='numbercad')

router.register(r'edit/hollow/simpleshapes/cuboid',CreateHoleCuboidViewset,basename='edithollowcuboid')
# router.register(r'edit/hollow/simpleshapes/cuboid',CreateHoleCubeViewset,basename='edithollowcuboid')


router.register(r'edit/hollow/complexshapes/feeder',CreateHollowFeederViewset,basename='edithollowfeeder')
router.register(r'edit/hollow/complexshapes/bottle',CreateHollowBottleViewset,basename='edithollowbottle')


# router.register(r'complexshapes/chair',ChairViewset,basename='complexshapes')


urlpatterns=[
    *router.urls
]