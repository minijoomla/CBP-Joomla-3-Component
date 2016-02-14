/*----------------------------------------------------------------------------------|  www.giz.de  |----/
	Deutsche Gesellschaft für International Zusammenarbeit (GIZ) Gmb 
/-------------------------------------------------------------------------------------------------------/

	@version		3.3.0
	@build			14th February, 2016
	@created		15th June, 2012
	@package		Cost Benefit Projection
	@subpackage		scaling_factor.js
	@author			Llewellyn van der Merwe <http://www.vdm.io>	
	@owner			Deutsche Gesellschaft für International Zusammenarbeit (GIZ) Gmb
	@copyright		Copyright (C) 2015. All Rights Reserved
	@license		GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html
	
/-------------------------------------------------------------------------------------------------------/
	Cost Benefit Projection Tool.
/------------------------------------------------------------------------------------------------------*/

// Some Global Values
jform_cfzxGECrmV_required = false;

// Initial Script
jQuery(document).ready(function()
{
	var company_cfzxGEC = jQuery("#jform_company").val();
	cfzxGEC(company_cfzxGEC);
});

// the cfzxGEC function
function cfzxGEC(company_cfzxGEC)
{
	if (isSet(company_cfzxGEC) && company_cfzxGEC.constructor !== Array)
	{
		var temp_cfzxGEC = company_cfzxGEC;
		var company_cfzxGEC = [];
		company_cfzxGEC.push(temp_cfzxGEC);
	}
	else if (!isSet(company_cfzxGEC))
	{
		var company_cfzxGEC = [];
	}
	var company = company_cfzxGEC.some(company_cfzxGEC_SomeFunc);


	// set this function logic
	if (company)
	{
		jQuery('#jform_country').closest('.control-group').show();
		if (jform_cfzxGECrmV_required)
		{
			updateFieldRequired('country',0);
			jQuery('#jform_country').prop('required','required');
			jQuery('#jform_country').attr('aria-required',true);
			jQuery('#jform_country').addClass('required');
			jform_cfzxGECrmV_required = false;
		}

	}
	else
	{
		jQuery('#jform_country').closest('.control-group').hide();
		if (!jform_cfzxGECrmV_required)
		{
			updateFieldRequired('country',1);
			jQuery('#jform_country').removeAttr('required');
			jQuery('#jform_country').removeAttr('aria-required');
			jQuery('#jform_country').removeClass('required');
			jform_cfzxGECrmV_required = true;
		}
	}
}

// the cfzxGEC Some function
function company_cfzxGEC_SomeFunc(company_cfzxGEC)
{
	// set the function logic
	if (company_cfzxGEC == 0)
	{
		return true;
	}
	return false;
}

// update required fields
function updateFieldRequired(name,status)
{
	var not_required = jQuery('#jform_not_required').val();

	if(status == 1)
	{
		if (isSet(not_required) && not_required != 0)
		{
			not_required = not_required+','+name;
		}
		else
		{
			not_required = ','+name;
		}
	}
	else
	{
		if (isSet(not_required) && not_required != 0)
		{
			not_required = not_required.replace(','+name,'');
		}
	}

	jQuery('#jform_not_required').val(not_required);
}

// the isSet function
function isSet(val)
{
	if ((val != undefined) && (val != null) && 0 !== val.length){
		return true;
	}
	return false;
} 
