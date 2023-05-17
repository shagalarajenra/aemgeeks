package com.aem.geeks.core.servlets;

import com.day.cq.commons.jcr.JcrConstants;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.request.RequestParameter;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.apache.sling.servlets.annotations.SlingServletPaths;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.jcr.ValueFormatException;
import javax.jcr.lock.LockException;
import javax.jcr.nodetype.ConstraintViolationException;
import javax.jcr.version.VersionException;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;

@Component(service = Servlet.class)
@SlingServletPaths(
        value = {"/bin/pagedata"}
)
public class PageInfoServlet extends SlingAllMethodsServlet {
    private static final Logger LOG = LoggerFactory.getLogger(GeeksPathTypeServlet.class);

    @Override
    protected void doGet(final SlingHttpServletRequest req, final SlingHttpServletResponse resp) throws ServletException, IOException {
        final ResourceResolver resourceResolver = req.getResourceResolver();
        LOG.info("Inside the get method of PageInfoServlet");
        String path = req.getParameter("pageurl");
        LOG.info("page url - "+path);
        Page page = resourceResolver.adaptTo(PageManager.class).getPage(path);
        JSONObject pageObject = new JSONObject();
        try {
            ResourceResolver resolver = req.getResourceResolver();
            Resource resource = page.getContentResource();
            Session session = resolver.adaptTo(Session.class);
            if (resource != null) {
                String title = resource.getValueMap().get(JcrConstants.JCR_TITLE, String.class);
                if (StringUtils.isNotBlank(title)) {
                    Node node = resource.adaptTo(Node.class);
                    node.setProperty(JcrConstants.JCR_TITLE,title + "XYZ");
                    resolver.commit();
                    session.save();
                }
            }
            pageObject.put("Page Title", page.getTitle());
            pageObject.put("Page Name", page.getName());
            pageObject.put("Page Url",page.getPath());
            pageObject.put("Page Template", page.getTemplate().getTitle());
        } catch (JSONException e) {
            LOG.info("\n ERROR {} ", e.getMessage());
        } catch (LockException e) {
            throw new RuntimeException(e);
        } catch (ValueFormatException e) {
            throw new RuntimeException(e);
        } catch (ConstraintViolationException e) {
            throw new RuntimeException(e);
        } catch (VersionException e) {
            throw new RuntimeException(e);
        } catch (RepositoryException e) {
            throw new RuntimeException(e);
        }

        resp.setContentType("application/json");
        resp.getWriter().write(pageObject.toString());
    }
}
