package com.aem.geeks.core.models.impl;

import com.aem.geeks.core.models.Header;
import com.day.cq.wcm.api.Page;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

@Model(adaptables = Resource.class,
adapters= Header.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL )
public class HeaderImpl implements Header {

    private static final Logger LOG = LoggerFactory.getLogger(HeaderImpl.class);
    @Inject
    String path;
    @Inject
    String logoPath;

    Page page;

    @SlingObject
    ResourceResolver resourceResolver;

    @Override
    public Page getPageDetails(){
    Resource resource = resourceResolver.getResource(path);
    LOG.debug("Inside the resource"+resource);
    Page page = resource.adaptTo(Page.class);
    return page;

    }


    @Override
    public String getPath() {
        return path;
    }

    @Override
    public String getLogoPath() {
        return logoPath;
    }
}
