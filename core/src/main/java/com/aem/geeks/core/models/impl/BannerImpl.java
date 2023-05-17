package com.aem.geeks.core.models.impl;

import com.aem.geeks.core.models.Banner;
import com.day.cq.wcm.api.Page;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import javax.inject.Inject;

@Model(adaptables = {Resource.class},
        adapters = Banner.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL )
public class BannerImpl implements Banner {
    @Inject
    @Default(values = "kittu")
    String title;

    @Inject
    @Required
    String description;

    @Inject
    String image;

    @ScriptVariable
    Page currentPage;

    @SlingObject
    Resource resource;

    @Self
    SlingHttpServletRequest slingHttpServletRequest;

    public SlingHttpServletRequest getSlingHttpServletRequest() {
        return slingHttpServletRequest;
    }

    public Resource getResource() {
        return resource;
    }

    @Override
    public String getTitle() {
        return title;
    }

    @Override
    public String getDescription() {
        return description;
    }

    @Override
    public String getImage() {
        return image;
    }

    @Override
    public String getPageTitle() {
        return currentPage.getTitle();
    }
}
