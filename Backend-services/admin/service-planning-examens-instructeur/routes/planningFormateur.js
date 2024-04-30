const express = require("express");
const router = express.Router();
const controller = require("../controllers/planningFormateur"); 
router.post(
  "/add",
  controller.postPlanning
);
router.get(
  "/lists",
  controller.getAllPlanningActivefeauture
);
router.get(
  "/list/active/past",
  controller.getAllPlanningActivePast
); 
router.get(
  "/list/calender",
  controller.getAllPlanningActiveForCalender
);
router.get(
  "/getAllPlanningForCalendar",
  controller.getAllPlanningForCalendar
); 
router.get(
  "/list/ref/formation/:cat",
  controller.getAllDistinctRefFormation
);
router.get(
  "/list/version/formation/:ref",
  controller.getAllDistinctVersionFormation
);
router.get(
  "/list/type/formation/:ref/:version",
  controller.getAllDistinctTypeFormation
);
router.get(
  "/list/type/forma/withoutversion/:ref",
  controller.getAllDistinctTypeFormatioWithoutVersion
); 
router.get(
  "/list/type/forma/pays/withoutversion/:ref",
  controller.getAllDistinctPaysFormationWithoutVersion
); 
router.get(
  "/list/date/forma/dist/withoutversion/:ref/:type",
  controller.getAllDateFormationDistintDistienciellleWithoutVersion
);
router.get(
  "/list/date/forma/present/withoutversion/:ref/:pays",
  controller.getAllDateFormationPresentielleWithoutVersion
);   
router.get(
  "/list/pays/formation/:ref/:version",
  controller.getAllDistinctPaysFormation
);
router.get(
  "/list/date/formations/:ref/:version/:type",
  controller.getAllDateFormationDistintDistienciellle
);
router.get(
  "/list/date/formations/presentielle/:ref/:version/:pays",
  controller.getAllDateFormationPresentielle
);
router.get(
  "/list/formateur/affected",
  controller.getAllAffecteSessionFormateur
);
router.get(
  "/list/date/formation/:id",
  controller.getAllDateFormation
);
router.get(
  "/lists/inactive",
  controller.getAllPlanningInactive
);
  router.get(
    "/lists/update/idsession/:id",
    controller.getPlanningUpdatedByIdSession
  ); 
  router.get(
    "/lists/update/:id",
    controller.getPlanningUpdatedById
  ); 
  router.get(
    "/lists/:id",
    controller.getPlanningById
  );
router.put(
    "/update/:id",
    controller.editPlanning
  );
router.put(
    "/edit/planning/session",
    controller.editPlanningForSession
  );  
router.delete(
    "/delete/:id",
    controller.deletePlanning
  );
  router.delete(
    "/deleteplanning/:id",
    controller.deletePlanningAfterAffected
  );
module.exports = router;