package com.aem.geeks.core.models;

import com.day.cq.wcm.api.Page;

public interface Header {
    String getPath();
    String getLogoPath();

    Page getPageDetails();

}
