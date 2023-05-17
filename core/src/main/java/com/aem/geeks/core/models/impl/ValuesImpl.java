package com.aem.geeks.core.models.impl;

import com.aem.geeks.core.models.Values;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;

import javax.inject.Inject;
import javax.inject.Named;
import java.util.List;

@Model(adaptables = Resource.class,
adapters = Values.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ValuesImpl implements Values {



    @Inject
    String title;
    @Inject
    String description;
    @ChildResource
    @Named("valueswithmap")
    List<Resource> valueswithmap;
    @Override
    public String getTitle() {
        return title;
    }

    @Override
    public String getDescription() {
        return description;
    }

    @Override
    public List<Resource> getValueswithmap() {
        return valueswithmap;
    }
}
