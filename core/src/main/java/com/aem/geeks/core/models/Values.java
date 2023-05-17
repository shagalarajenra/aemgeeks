package com.aem.geeks.core.models;

import org.apache.sling.api.resource.Resource;

import java.util.List;
import java.util.Map;

public interface Values {
    String getTitle();
    String getDescription();
//    List<Resource> getValueswithmap();


    List<Map<String,String>> getValueswithmap();
}