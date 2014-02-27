<?php

class Homepage extends Page {

    private static $db = array(
    );
    private static $has_one = array(
    );

}

class Homepage_Controller extends Page_Controller {

    private static $allowed_actions = array(
    );

    public function init() {
        parent::init();
    }

    public function getRandomMainImage() {
        $count = DataList::create("CaseStudy");
        $i = rand(1, $count->Count());
        return $count->limit(1, $i - 1);
    }

}
