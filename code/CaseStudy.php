<?php

class CaseStudy extends Page {

    private static $db = array(
        "Templatea" => "Varchar(255)",
        "SubTitle" => "Varchar(255)",
        'Content1' => 'HTMLText',
        'Content2' => 'HTMLText'
    );
    private static $has_one = array(
        "Logo" => "Image",
        "MainImage" => "Image"
    );

    public function getCMSFields() {
        $fields = parent::getCMSFields();

        $fields->addFieldToTab("Root.Main", new HTMLEditorField("Content1", "Sub Content1:"));
        $fields->addFieldToTab("Root.Main", new HTMLEditorField("Content2", "Sub Content2:"));


        $fields->addFieldToTab('Root.Main', new TextField('Templatea', 'Template Identifier:'), 'Metadata');
        $fields->addFieldToTab('Root.Main', new TextField('SubTitle', 'Sub Title:'), 'Content');
        $fields->addFieldToTab('Root.Images', $uploadField = new UploadField('Logo', 'Logo:'));
        $uploadField->setFolderName('logos');
        $fields->addFieldToTab('Root.Images', $uploadMain = new UploadField('MainImage', 'Main Image:'));
        $uploadMain->setFolderName('main');

        return $fields;
    }

}

class CaseStudy_Controller extends Page_Controller {

    function index() {
        if ($this->Templatea) {
            return $this->renderWith(array($this->Templatea, 'Page'));
        } else {
            return Array();
        }
    }

    private static $allowed_actions = array(
    );

    public function init() {
        parent::init();
    }

}
