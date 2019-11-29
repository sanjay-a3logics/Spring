({
	fatchAccountHelper : function(component, event, helper){
		var action = component.get("c.queryRecordMethod");         
        action.setCallback(this, function(response){
            var state = response.getState();       
            if(state=="SUCCESS"){
                var accountList = response.getReturnValue();
                component.set("v.accountList",accountList);
            }else{
                alert("Error in getting data");
            }
             
        });
        $A.enqueueAction(action);   
	}, 
})