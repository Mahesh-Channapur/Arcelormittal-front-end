// Core
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: "root" })
export class CitGlobalConstantService {

    baseUrl: string = environment.domain;
    alloy_wire_upload: string = this.baseUrl + "Alloy_wire_upload";
    alloy_wire_validate: string = this.baseUrl + "Alloy_wire_validate";

    alloy_billet_upload: string = this.baseUrl + "Alloy_billet_upload";
    alloy_billet_validate: string = this.baseUrl + "Alloy_billet_validate";

    scrap_upload: string = this.baseUrl + "scrap_upload";
    scrap_validate: string = this.baseUrl + "Alloy_scrap_validate";

    alloy_scrap_history: string = this.baseUrl + "alloy_surcharge_history";
    get_history_file_data: string = this.baseUrl + "getfile_data";

    //base price addition 
    smb: any = {
        list: this.baseUrl + "Base_Price_Data",
        get: this.baseUrl + "get_record_baseprice",
        add: this.baseUrl + "add_record_baseprice",
        delete: this.baseUrl + "delete_record_baseprice",
        upload: this.baseUrl + "Base_Price_Upload",
        validate: this.baseUrl + "Base_Price_validate",
        update: this.baseUrl + "update_record_baseprice",
        download: this.baseUrl + "Base_price_download",
    };
    smb_mini_bar: any = {
        list: this.baseUrl + "data_baseprice_category_minibar",
        get: this.baseUrl + "get_record_baseprice_category_minibar",
        add: this.baseUrl + "add_record_baseprice_category_minibar",
        delete: this.baseUrl + "delete_record_baseprice_category_minibar",
        upload: this.baseUrl + "upload_baseprice_category_minibar",
        validate: this.baseUrl + "validate_baseprice_category_minibar",
        update: this.baseUrl + "update_record_baseprice_category_minibar",
        download: this.baseUrl + "download_baseprice_category_minibar",
    };

    //certificate 
    certificate: any = {
        list: this.baseUrl + "data_extra_certificate",
        get: this.baseUrl + "get_record_extra_certificate",
        update: this.baseUrl + "update_record_extra_certificate",
        delete: this.baseUrl + "delete__record_extra_certificate",
        upload: this.baseUrl + "upload_extra_certificate",
        validate: this.baseUrl + "validate_extra_certificate",
        add: this.baseUrl + "add_record_extra_certificate",
        download: this.baseUrl + "download_extra_certificate",
    };
    certificate_mini_bar: any = {
        list: this.baseUrl + "data_extra_certificate_minibar",
        get: this.baseUrl + "get_record_extra_certificate_minibar",
        add: this.baseUrl + "add_record_extra_certificate_minibar",
        delete: this.baseUrl + "delete_record_extra_certificate_minibar",
        upload: this.baseUrl + "upload_extra_certificate_minibar",
        validate: this.baseUrl + "validate_extra_certificate_minibar",
        update: this.baseUrl + "update_record_extra_certificate_minibar",
        download: this.baseUrl + "download_extra_certificate_minibar",
    };

    //freight_parity 
    freight_parity: any = {
        list: this.baseUrl + "data_freight_parity",
        get: this.baseUrl + "get_record_freight_parity",
        add: this.baseUrl + "add_record_freight_parity",
        delete: this.baseUrl + "delete_record_freight_parity",
        upload: this.baseUrl + "upload_freight_parity",
        validate: this.baseUrl + "validate_freight_parity",
        update: this.baseUrl + "update_record_freight_parity",
        download: this.baseUrl + "download_freight_parity",
    };
    freight_parity_mini_bar: any = {
        list: this.baseUrl + "data_freight_parity_minibar",
        get: this.baseUrl + "get_record_freight_parity_minibar",
        add: this.baseUrl + "add_record_freight_parity_minibar",
        delete: this.baseUrl + "delete_record_freight_parity_minibar",
        upload: this.baseUrl + "upload_freight_parity_minibar",
        validate: this.baseUrl + "validate_freight_parity_minibar",
        update: this.baseUrl + "update_record_freight_parity_minibar",
        download: this.baseUrl + "download_freight_parity_minibar",
    };
    //delivery_mill 
    delivery_mill: any = {
        list: this.baseUrl + "data_delivery_mill",
        get: this.baseUrl + "get_record_delivery_mill",
        add: this.baseUrl + "add_record_delivery_mill",
        delete: this.baseUrl + "delete_record_delivery_mill",
        upload: this.baseUrl + "upload_delivery_mill",
        validate: this.baseUrl + "validate_delivery_mill",
        update: this.baseUrl + "update_record_delivery_mill",
        download: this.baseUrl + "download_delivery_mill",
    };
    delivery_mill_mini_bar: any = {
        list: this.baseUrl + "data_delivery_mill_minibar",
        get: this.baseUrl + "get_record_delivery_mill_minibar",
        add: this.baseUrl + "add_record_delivery_mill_minibar",
        delete: this.baseUrl + "delete_record_delivery_mill_minibar",
        upload: this.baseUrl + "upload_delivery_mill_minibar",
        validate: this.baseUrl + "validate_delivery_mill_minibar",
        update: this.baseUrl + "update_record_delivery_mill_minibar",
        download: this.baseUrl + "download_delivery_mill_minibar",
    };
    //grade 
    grade: any = {
        list: this.baseUrl + "data_extra_grade",
        get: this.baseUrl + "get_record_extra_grade",
        add: this.baseUrl + "add_record_extra_grade",
        delete: this.baseUrl + "delete_record_extra_grade",
        upload: this.baseUrl + "upload_extra_grade",
        validate: this.baseUrl + "validate_extra_grade",
        update: this.baseUrl + "update_record_extra_grade",
        download: this.baseUrl + "download_extra_grade",
    };
    grade_mini_bar: any = {
        list: this.baseUrl + "data_extra_grade_minibar",
        get: this.baseUrl + "get_record_extra_grade_minibar",
        add: this.baseUrl + "add_record_extra_grade_minibar",
        delete: this.baseUrl + "delete_record_extra_grade_minibar",
        upload: this.baseUrl + "upload_extra_grade_minibar",
        validate: this.baseUrl + "validate_extra_grade_minibar",
        update: this.baseUrl + "update_record_extra_grade_minibar",
        download: this.baseUrl + "download_extra_grade_minibar",
    };

    //length_logistic 
    length_logistic: any = {
        list: this.baseUrl + "data_length_logistic",
        get: this.baseUrl + "get_record_length_logistic",
        add: this.baseUrl + "add_record_length_logistic",
        delete: this.baseUrl + "delete_record_length_logistic",
        upload: this.baseUrl + "upload_length_logistic",
        validate: this.baseUrl + "validate_length_logistic",
        update: this.baseUrl + "update_record_length_logistic",
        download: this.baseUrl + "download_length_logistic",
    };
    length_logistic_mini_bar: any = {
        list: this.baseUrl + "data_length_logistic_minibar",
        get: this.baseUrl + "get_record_length_logistic_minibar",
        add: this.baseUrl + "add_record_length_logistic_minibar",
        delete: this.baseUrl + "delete_record_length_logistic_minibar",
        upload: this.baseUrl + "upload_length_logistic_minibar",
        validate: this.baseUrl + "validate_length_logistic_minibar",
        update: this.baseUrl + "update_record_length_logistic_minibar",
        download: this.baseUrl + "download_length_logistic_minibar",
    };

    //length_production 
    length_production: any = {
        list: this.baseUrl + "data_length_production",
        get: this.baseUrl + "get_record_length_production",
        add: this.baseUrl + "add_record_length_production",
        delete: this.baseUrl + "delete_record_length_production",
        upload: this.baseUrl + "upload_length_production",
        validate: this.baseUrl + "validate_length_production",
        update: this.baseUrl + "update_record_length_production",
        download: this.baseUrl + "download_length_production",
    };
    length_production_mini_bar: any = {
        list: this.baseUrl + "data_length_production_minibar",
        get: this.baseUrl + "get_record_length_production_minibar",
        add: this.baseUrl + "add_record_length_production_minibar",
        delete: this.baseUrl + "delete_record_length_production_minibar",
        upload: this.baseUrl + "upload_length_production_minibar",
        validate: this.baseUrl + "validate_length_production_minibar",
        update: this.baseUrl + "update_record_length_production_minibar",
        download: this.baseUrl + "download_length_production_minibar",
    };

    //transport_mode 
    transport_mode: any = {
        list: this.baseUrl + "data_transport",
        get: this.baseUrl + "get_record_transport",
        add: this.baseUrl + "add_record_transport",
        delete: this.baseUrl + "delete_record_transport",
        upload: this.baseUrl + "upload_transport",
        validate: this.baseUrl + "validate_transport",
        update: this.baseUrl + "update_record_transport",
        download: this.baseUrl + "download_transport",
    };
    transport_mode_mini_bar: any = {
        list: this.baseUrl + "data_transport_minibar",
        get: this.baseUrl + "get_record_transport_minibar",
        add: this.baseUrl + "add_record_transport_minibar",
        delete: this.baseUrl + "delete_record_transport_minibar",
        upload: this.baseUrl + "upload_transport_minibar",
        validate: this.baseUrl + "validate_transport_minibar",
        update: this.baseUrl + "update_record_transport_minibar",
        download: this.baseUrl + "download_transport_minibar",
    };

    //profile 
    profile: any = {
        list: this.baseUrl + "data_extra_profile",
        get: this.baseUrl + "get_record_extra_profile",
        add: this.baseUrl + "add_record_extra_profile",
        delete: this.baseUrl + "delete_record_extra_profile",
        upload: this.baseUrl + "upload_extra_profile",
        validate: this.baseUrl + "validate_extra_profile",
        update: this.baseUrl + "update_record_extra_profile",
        download: this.baseUrl + "download_extra_profile",
    };
    profile_mini_bar: any = {
        list: this.baseUrl + "data_extra_profile_minibar",
        get: this.baseUrl + "get_record_extra_profile_minibar",
        add: this.baseUrl + "add_record_extra_profile_minibar",
        delete: this.baseUrl + "delete_record_extra_profile_minibar",
        upload: this.baseUrl + "upload_extra_profile_minibar",
        validate: this.baseUrl + "validate_extra_profile_minibar",
        update: this.baseUrl + "update_record_extra_profile_minibar",
        download: this.baseUrl + "download_extra_profile_minibar",
    };

    //profile_lberia_italy 
    profile_lberia_italy: any = {
        list: this.baseUrl + "data_extra_profile_Iberia",
        get: this.baseUrl + "get_record_extra_profile_Iberia",
        add: this.baseUrl + "add_record_extra_profile_Iberia",
        delete: this.baseUrl + "delete_record_extra_profile_Iberia",
        upload: this.baseUrl + "upload_extra_profile_Iberia",
        validate: this.baseUrl + "validate_extra_profile_Iberia",
        update: this.baseUrl + "update_record_extra_profile_Iberia",
        download: this.baseUrl + "download_extra_profile_Iberia",
    };
    profile_lberia_italy_mini_bar: any = {
        list: this.baseUrl + "data_extra_profile_Iberia_minibar",
        get: this.baseUrl + "get_record_extra_profile_Iberia_minibar",
        add: this.baseUrl + "add_record_extra_profile_Iberia_minibar",
        delete: this.baseUrl + "delete_record_extra_profile_Iberia_minibar",
        upload: this.baseUrl + "upload_extra_profile_Iberia_minibar",
        validate: this.baseUrl + "validate_extra_profile_Iberia_minibar",
        update: this.baseUrl + "update_record_extra_profile_Iberia_minibar",
        download: this.baseUrl + "download_extra_profile_Iberia_minibar",
    };
    //incoterm exceptions 
    incoterm_exceptions: any = {
        list: this.baseUrl + "data_baseprice_incoterm",
        get: this.baseUrl + "get_record_baseprice_incoterm",
        add: this.baseUrl + "add_record_baseprice_incoterm",
        delete: this.baseUrl + "delete_record_baseprice_incoterm",
        upload: this.baseUrl + "upload_baseprice_incoterm",
        validate: this.baseUrl + "validate_baseprice_incoterm",
        update: this.baseUrl + "update_record_baseprice_incoterm",
        download: this.baseUrl + "download_baseprice_incoterm",
    };
    incoterm_exceptions_mini_bar: any = {
        list: this.baseUrl + "data_baseprice_incoterm",
        get: this.baseUrl + "get_record_baseprice_incoterm",
        add: this.baseUrl + "add_record_baseprice_incoterm",
        delete: this.baseUrl + "delete_record_baseprice_incoterm",
        upload: this.baseUrl + "upload_baseprice_incoterm",
        validate: this.baseUrl + "validate_baseprice_incoterm",
        update: this.baseUrl + "update_record_baseprice_incoterm",
        download: this.baseUrl + "download_baseprice_incoterm",
    };
    registration: any = {
        usergroupmanagement: this.baseUrl + "",
    }
    myTask: any = {
        offerStatus: this.baseUrl + "taskbar1_data",
        orderStatus: this.baseUrl + "order_status_delay",
        customerVolume: this.baseUrl + "",
        missingInvoicePayment: this.baseUrl + "invoice_payments"
    };
    userAccess: any = {
        login: this.baseUrl + "login",
        group_management_data: this.baseUrl + "group_management_data",
        
    }
    management : any = {
        single_user : this.baseUrl + "management"
    };

    //User-management
    single_user : any = {
        valid_user : "http://127.0.0.1:5000/existUsername",
        valid_email : "http://127.0.0.1:5000/existEmail",
        insert_values : "http://127.0.0.1:5000/insert_values"

        
    };

    group_user : any = {
        user_access : 'http://127.0.0.1:5000/user_access',
        group_description : 'http://127.0.0.1:5000/group_description'
    }

}
