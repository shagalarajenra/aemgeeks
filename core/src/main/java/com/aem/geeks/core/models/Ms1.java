package com.aem.geeks.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import javax.inject.Inject;

@Model(adaptables = Resource.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Ms1 {

    @Inject
    String title;

    @Inject
    String description;

    @Inject
    String lname;

    public String getLname() {
        return lname;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }


}
