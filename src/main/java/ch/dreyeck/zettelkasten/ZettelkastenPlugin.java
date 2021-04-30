package ch.dreyeck.zettelkasten;

import systems.dmx.core.osgi.PluginActivator;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import java.util.logging.Logger;


@Path("/zettelkasten")
@Consumes("application/json")
@Produces("application/json")
public class ZettelkastenPlugin extends PluginActivator {

    // ------------------------------------------------------------------------------------------------------- Constants


    // ---------------------------------------------------------------------------------------------- Instance Variables

    private Logger logger = Logger.getLogger(getClass().getName());

    // -------------------------------------------------------------------------------------------------- Public Methods


    // ****************************
    // *** ZettelkastensService ***
    // ****************************

    // The Java method will process HTTP GET requests
    @GET
    // The Java method will produce content identified by the MIME Media
    // type "text/plain"
    @Produces("text/plain")
    public String getMessage() {
        // Return some textual content
        return "Hello World from Zettelkasten";
    }

}
