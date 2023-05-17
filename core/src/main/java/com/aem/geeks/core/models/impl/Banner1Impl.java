package com.aem.geeks.core.models.impl;


import com.aem.geeks.core.models.Banner1;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import javax.inject.Inject;

@Model(adaptables = {Resource.class},
        adapters = Banner1.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Banner1Impl implements Banner1 {

    @Inject
    String title;

    @Inject
    String description;

    @Inject
    String image;

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
}
