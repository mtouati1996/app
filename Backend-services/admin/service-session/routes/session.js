const express = require("express");
const router = express.Router();
const controller = require("../controllers/session"); 
router.post(
  "/add",
  controller.postSession
);

router.get(
  "/lists",
  controller.getAllSessionActivefeauture
);
router.get(
  "/list/active/past",
  controller.getAllSessionActivePast
);
router.get(
  "/lists/nonaffecter",
  controller.getAllSessionNonAffecter
);
router.get(
  "/lists/inactive",
  controller.getAllSessionInactive
);

router.get(
    "/lists/:id",
    controller.getSessionById
  );
router.get(
    "/lists/email/:id",
    controller.getSessionWithEmailById
  );
  router.get(
    "/allSessionByIdCours/:id",
    controller.getAllSessionAffectedByIdCours
  );
   router.get(
    "/formateurchanger/email/:email/:namef/:ref/:designation/:dated/:datef",
    controller.emailFormateurChanger
  );
router.get(
    "/sendemail/:email/:ref/:dated/:datef/:type/:langue/:lieu/:version_session/:etat/:etatsession/:namef/:namecours/:pays/:contact/:numeroc/:mailc/:nbrpartic",
    controller.getSendMail
  ); 
  router.get(
    "/sendeemail/distancielle/:email/:ref/:dated/:datef/:type/:langue/:version_session/:etat/:etatsession/:namef/:namecours/:contact/:numeroc/:mailc/:nbrpartic",
    controller.getSendMailDistancielle
  );    
router.put(
    "/update/:id",
    controller.editSession
  );
  router.put(
    "/edit/calendar",
    controller.editSessionForCalendar
  );  
  router.put(
    "/affected/:id/:name",
    controller.editSessionAffected
  );
  router.put(
    "/statutsession/:id/:etatsession",
    controller.updateStatutSession 
  );
  router.put(
    "/emptyaffected/:id",
    controller.editSessionEmptyAffected
  );
router.delete(
    "/delete/:id",
    controller.deleteSession
  );
  router.put(
    "/deleteformateur/:id",
    controller.deleteFormateur
  ); 
  router.delete(
    "/deletesession/category/:cat",
    controller.deleteSessionByCategory
  );  
  router.delete(
    "/deletesession/idcours/:idcours",
    controller.deleteSessionIdCours
  );   
module.exports = router;