<?php

class CaseStudyHolder extends Page {

    static $allowed_children = array("CaseStudy");
    static $default_child = "CaseStudy";
    private static $db = array(
    );
    private static $has_one = array(
    );

}

class CaseStudyHolder_Controller extends Page_Controller {

    private static $allowed_actions = array(
    );

    public function init() {
        parent::init();
    }

}
