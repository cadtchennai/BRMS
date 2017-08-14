package com.java;

//import java.util.List;

import org.kie.api.KieServices;
//import org.kie.api.builder.KieScanner;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;

//import orderconfirmation.order.OrderDO;
import com.techm.brms.driverriskrules.DriverDO;

//import com.redhat.sampledrools.Candidate;



/**
 * This is a sample class to launch a rule.
 */
public class DroolsSalienceExample   {
    private String topic;
    
    public DroolsSalienceExample(String topic) {
        this.topic = topic;
    }

    public static final void main(String[] args) throws Exception {
        try {
            // load up the knowledge base
            KieServices ks = KieServices.Factory.get();           
            KieContainer kContainer = ks.getKieClasspathContainer();           
            KieSession kSession = kContainer.newKieSession("RiskStateful");        
            
          
            DriverDO dr=new DriverDO();
            dr.setAge(23);  
           
            kSession.insert(dr);
           
    		System.out.println("Entered Age is: "+dr.getAge());
    		System.out.println("************* Fired Rules **************");
            kSession.fireAllRules(); 
            System.out.println("************************************");
           
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public String getTopic() {
        return topic;
    }
        
    public String introduceYourself() {
        return "Drools 6.2.0.Final";
    }
}