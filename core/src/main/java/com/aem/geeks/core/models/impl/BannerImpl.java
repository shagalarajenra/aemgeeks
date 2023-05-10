package com.aem.geeks.core.models.impl;

import com.aem.geeks.core.models.Banner;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;

import javax.inject.Inject;

@Model(adaptables = Resource.class,
        adapters = Banner.class)
public class BannerImpl implements Banner {
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
