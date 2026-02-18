const Ziggy = {
    url: 'http:\/\/laravel.localdev',
    port: null,
    defaults: {},
    routes: {
        'sanctum.csrf-cookie': {
            uri: 'sanctum\/csrf-cookie',
            methods: ['GET', 'HEAD'],
        },
        get_states: {
            uri: 'api\/states\/{country?}',
            methods: ['GET', 'HEAD'],
            wheres: { country: '^[A-Z]{2}$' },
            parameters: ['country'],
        },
        auth_token: { uri: 'api\/auth\/token', methods: ['POST'] },
        user_registration_otp: {
            uri: 'api\/user\/register\/otp',
            methods: ['POST'],
        },
        user_login_otp: { uri: 'api\/user\/login\/otp', methods: ['POST'] },
        home: { uri: '\/', methods: ['GET', 'HEAD'] },
        blog: { uri: 'blog', methods: ['GET', 'HEAD'] },
        blog_post: {
            uri: 'blog\/{slug}',
            methods: ['GET', 'HEAD'],
            wheres: { slug: '[a-z0-9\\-]+' },
            parameters: ['slug'],
        },
        about: { uri: 'about-us', methods: ['GET', 'HEAD'] },
        terms: { uri: 'terms', methods: ['GET', 'HEAD'] },
        privacy: { uri: 'privacy', methods: ['GET', 'HEAD'] },
        child_safety: { uri: 'child-safety', methods: ['GET', 'HEAD'] },
        refund: { uri: 'refund', methods: ['GET', 'HEAD'] },
        security: { uri: 'security', methods: ['GET', 'HEAD'] },
        sitemap: { uri: 'sitemap', methods: ['GET', 'HEAD'] },
        faq: { uri: 'faq', methods: ['GET', 'HEAD'] },
        packages: { uri: 'packages', methods: ['GET', 'HEAD'] },
        services: { uri: 'services', methods: ['GET', 'HEAD'] },
        careers: { uri: 'careers', methods: ['GET', 'HEAD'] },
        contactus: { uri: 'contact-us', methods: ['GET', 'HEAD'] },
        business: { uri: 'business', methods: ['GET', 'HEAD'] },
        become_agent: { uri: 'become-agent', methods: ['GET', 'HEAD'] },
        how_to_use: { uri: 'how-to-use', methods: ['GET', 'HEAD'] },
        thankyou: { uri: 'thankyou', methods: ['GET', 'HEAD'] },
        registration: { uri: 'register', methods: ['GET', 'HEAD'] },
        send_enquiry: { uri: 'enquiry', methods: ['POST'] },
        user_registration: {
            uri: 'api\/user\/register\/submit\/{otp}',
            methods: ['POST'],
            wheres: { otp: '[0-9]{6}' },
            parameters: ['otp'],
        },
        user_login: {
            uri: 'api\/user\/login\/submit\/{otp}',
            methods: ['POST'],
            wheres: { otp: '[0-9]{6}' },
            parameters: ['otp'],
        },
        profile_photo_view: {
            uri: 'photo\/{uuid}',
            methods: ['GET', 'HEAD'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        partner_view: {
            uri: 'partner\/view\/{uuid}',
            methods: ['GET', 'HEAD'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        user_dashboard: { uri: 'user', methods: ['GET', 'HEAD'] },
        user_logout: { uri: 'user\/logout', methods: ['GET', 'HEAD'] },
        user_profile: { uri: 'user\/profile', methods: ['GET', 'HEAD'] },
        user_like: { uri: 'user\/like', methods: ['GET', 'HEAD'] },
        user_interest: { uri: 'user\/interest', methods: ['GET', 'HEAD'] },
        user_view: { uri: 'user\/view', methods: ['GET', 'HEAD'] },
        profile_activity_create: {
            uri: 'user\/activity\/{uuid?}',
            methods: ['POST'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        profile_activity_update: {
            uri: 'user\/activity\/{profile_activity}',
            methods: ['PUT'],
            wheres: { profile_activity: '[0-9]+' },
            parameters: ['profile_activity'],
        },
        profile_activity_delete: {
            uri: 'user\/activity\/{profile_activity}',
            methods: ['DELETE'],
            wheres: { profile_activity: '[0-9]+' },
            parameters: ['profile_activity'],
        },
        user_photo: {
            uri: 'user\/photo\/{uuid?}',
            methods: ['GET', 'HEAD'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        user_profile_update: {
            uri: 'user\/profile\/update',
            methods: ['GET', 'HEAD'],
        },
        user_update_address: {
            uri: 'user\/profile\/update\/address',
            methods: ['GET', 'HEAD'],
        },
        user_update_family: {
            uri: 'user\/profile\/update\/family',
            methods: ['GET', 'HEAD'],
        },
        user_update_partner: {
            uri: 'user\/profile\/update\/partner',
            methods: ['GET', 'HEAD'],
        },
        user_update_education: {
            uri: 'user\/profile\/update\/education',
            methods: ['GET', 'HEAD'],
        },
        user_update_qualification: {
            uri: 'user\/profile\/update\/qualification',
            methods: ['GET', 'HEAD'],
        },
        user_update_photo: {
            uri: 'user\/profile\/update\/photo',
            methods: ['GET', 'HEAD'],
        },
        user_update_physical: {
            uri: 'user\/profile\/update\/physical',
            methods: ['GET', 'HEAD'],
        },
        user_update_sibling: {
            uri: 'user\/profile\/update\/sibling',
            methods: ['GET', 'HEAD'],
        },
        user_update_marriage: {
            uri: 'user\/profile\/update\/marriage',
            methods: ['GET', 'HEAD'],
        },
        user_update_language: {
            uri: 'user\/profile\/update\/language',
            methods: ['GET', 'HEAD'],
        },
        user_update_hobby: {
            uri: 'user\/profile\/update\/hobby',
            methods: ['GET', 'HEAD'],
        },
        user_profile_reset: {
            uri: 'user\/profile\/reset',
            methods: ['GET', 'HEAD'],
        },
        user_permission: { uri: 'user\/permission', methods: ['GET', 'HEAD'] },
        user_exit: { uri: 'user\/exit', methods: ['GET', 'HEAD'] },
        user_terms: { uri: 'user\/terms', methods: ['GET', 'HEAD'] },
        user_grievance: { uri: 'user\/grievance', methods: ['GET', 'HEAD'] },
        user_subscription: {
            uri: 'user\/subscription',
            methods: ['GET', 'HEAD'],
        },
        user_subscription_upgrade: {
            uri: 'user\/subscription\/upgrade',
            methods: ['GET', 'HEAD'],
        },
        user_subscription_highlight: {
            uri: 'user\/subscription\/highlight',
            methods: ['GET', 'HEAD'],
        },
        user_subscription_history: {
            uri: 'user\/subscription\/history',
            methods: ['GET', 'HEAD'],
        },
        user_search: { uri: 'user\/search', methods: ['GET', 'HEAD'] },
        user_search_saved: {
            uri: 'user\/search\/saved',
            methods: ['GET', 'HEAD'],
        },
        user_partner_choice: {
            uri: 'user\/partner-choice',
            methods: ['GET', 'HEAD'],
        },
        user_matches: { uri: 'user\/matches', methods: ['GET', 'HEAD'] },
        user_matches_nearby: {
            uri: 'user\/matches\/nearby',
            methods: ['GET', 'HEAD'],
        },
        user_matches_high_rated: {
            uri: 'user\/matches\/high-rated',
            methods: ['GET', 'HEAD'],
        },
        user_message_inbox: {
            uri: 'user\/message\/inbox',
            methods: ['GET', 'HEAD'],
        },
        user_message_send: {
            uri: 'user\/message\/send',
            methods: ['GET', 'HEAD'],
        },
        user_message_view: {
            uri: 'user\/message\/view\/{mid}',
            methods: ['GET', 'HEAD'],
            parameters: ['mid'],
        },
        user_message_compose: {
            uri: 'user\/message\/compose\/{uuid?}',
            methods: ['GET', 'HEAD'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        message_compose_create: {
            uri: 'user\/message\/compose\/{uuid?}',
            methods: ['POST'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        user_message_chat: {
            uri: 'user\/message\/chat',
            methods: ['GET', 'HEAD'],
        },
        user_message_video: {
            uri: 'user\/message\/video',
            methods: ['GET', 'HEAD'],
        },
        profile_basic_update: {
            uri: 'user\/profile\/basic\/{uuid?}',
            methods: ['PUT'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        profile_advanced_update: {
            uri: 'user\/profile\/advanced\/{uuid?}',
            methods: ['PUT'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        profile_basic_info_update: {
            uri: 'user\/profile\/basic-info',
            methods: ['PUT'],
        },
        profile_photo_create: {
            uri: 'user\/profile\/photo\/{uuid?}',
            methods: ['POST'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        profile_photo_setdefault: {
            uri: 'user\/profile\/photo\/default\/{uuid?}',
            methods: ['POST'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        profile_photo_delete: {
            uri: 'user\/profile\/photo\/delete\/{profile_photo}',
            methods: ['DELETE'],
            wheres: { profile_photo: '[0-9]+' },
            parameters: ['profile_photo'],
        },
        profile_address_create: {
            uri: 'user\/profile\/address\/{uuid?}',
            methods: ['POST'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        profile_address_update: {
            uri: 'user\/profile\/address\/{profile_address}',
            methods: ['PUT'],
            wheres: { profile_address: '[0-9]+' },
            parameters: ['profile_address'],
        },
        profile_address_delete: {
            uri: 'user\/profile\/address\/{profile_address}',
            methods: ['DELETE'],
            wheres: { profile_address: '[0-9]+' },
            parameters: ['profile_address'],
        },
        profile_language_create: {
            uri: 'user\/profile\/language\/{uuid?}',
            methods: ['POST'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        profile_language_update: {
            uri: 'user\/profile\/language\/{profile_language}',
            methods: ['PUT'],
            wheres: { profile_language: '[0-9]+' },
            parameters: ['profile_language'],
        },
        profile_language_delete: {
            uri: 'user\/profile\/language\/{profile_language}',
            methods: ['DELETE'],
            wheres: { profile_language: '[0-9]+' },
            parameters: ['profile_language'],
        },
        profile_job_create: {
            uri: 'user\/profile\/job\/{uuid?}',
            methods: ['POST'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        profile_job_update: {
            uri: 'user\/profile\/job\/{profile_job}',
            methods: ['PUT'],
            wheres: { profile_job: '[0-9]+' },
            parameters: ['profile_job'],
        },
        profile_job_delete: {
            uri: 'user\/profile\/job\/{profile_job}',
            methods: ['DELETE'],
            wheres: { profile_job: '[0-9]+' },
            parameters: ['profile_job'],
        },
        profile_education_create: {
            uri: 'user\/profile\/education\/{uuid?}',
            methods: ['POST'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        profile_education_update: {
            uri: 'user\/profile\/education\/{profile_education}',
            methods: ['PUT'],
            wheres: { profile_education: '[0-9]+' },
            parameters: ['profile_education'],
        },
        profile_education_delete: {
            uri: 'user\/profile\/education\/{profile_education}',
            methods: ['DELETE'],
            wheres: { profile_education: '[0-9]+' },
            parameters: ['profile_education'],
        },
        profile_sibling_create: {
            uri: 'user\/profile\/sibling\/{uuid?}',
            methods: ['POST'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        profile_sibling_update: {
            uri: 'user\/profile\/sibling\/{profile_sibling}',
            methods: ['PUT'],
            wheres: { profile_sibling: '[0-9]+' },
            parameters: ['profile_sibling'],
        },
        profile_sibling_delete: {
            uri: 'user\/profile\/sibling\/{profile_sibling}',
            methods: ['DELETE'],
            wheres: { profile_sibling: '[0-9]+' },
            parameters: ['profile_sibling'],
        },
        profile_marriage_create: {
            uri: 'user\/profile\/marriage\/{uuid?}',
            methods: ['POST'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        profile_marriage_update: {
            uri: 'user\/profile\/marriage\/{profile_marriage}',
            methods: ['PUT'],
            wheres: { profile_marriage: '[0-9]+' },
            parameters: ['profile_marriage'],
        },
        profile_marriage_delete: {
            uri: 'user\/profile\/marriage\/{profile_marriage}',
            methods: ['DELETE'],
            wheres: { profile_marriage: '[0-9]+' },
            parameters: ['profile_marriage'],
        },
        profile_partner_update: {
            uri: 'user\/profile\/partner\/{uuid?}',
            methods: ['PUT'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        profile_family_update: {
            uri: 'user\/profile\/family\/{uuid?}',
            methods: ['PUT'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        profile_physical_update: {
            uri: 'user\/profile\/physical\/{uuid?}',
            methods: ['PUT'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        profile_package_create: {
            uri: 'user\/profile\/package\/{uuid?}',
            methods: ['POST'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        profile_interest_update: {
            uri: 'user\/profile\/interest\/{uuid?}',
            methods: ['POST'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        admin_home: { uri: 'admin', methods: ['GET', 'HEAD'] },
        admin_login: { uri: 'admin\/login', methods: ['POST'] },
        admin_account: {
            uri: 'admin\/account\/{uuid?}',
            methods: ['GET', 'HEAD'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        admin_store: {
            uri: 'admin\/account\/{uuid?}',
            methods: ['POST'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        admin_account_delete: {
            uri: 'admin\/account\/delete\/{uuid}',
            methods: ['DELETE'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        admin_account_list: {
            uri: 'admin\/account\/list',
            methods: ['GET', 'HEAD'],
        },
        admin_dashboard: { uri: 'admin\/dashboard', methods: ['GET', 'HEAD'] },
        admin_logout: { uri: 'admin\/logout', methods: ['GET', 'HEAD'] },
        attribute_type_list: {
            uri: 'admin\/attribute_type\/list',
            methods: ['GET', 'HEAD'],
        },
        attribute_type_form: {
            uri: 'admin\/attribute_type\/{id?}',
            methods: ['GET', 'HEAD'],
            wheres: { id: '[0-9]+' },
            parameters: ['id'],
        },
        attribute_type_store: {
            uri: 'admin\/attribute_type\/{id?}',
            methods: ['POST'],
            wheres: { id: '[0-9]+' },
            parameters: ['id'],
        },
        attribute_type_destroy: {
            uri: 'admin\/attribute_type\/{id}',
            methods: ['DELETE'],
            wheres: { id: '[0-9]+' },
            parameters: ['id'],
        },
        attribute_list: {
            uri: 'admin\/attribute\/list',
            methods: ['GET', 'HEAD'],
        },
        attribute_form: {
            uri: 'admin\/attribute\/{attribute_item?}',
            methods: ['GET', 'HEAD'],
            wheres: { attribute_item: '[0-9]+' },
            parameters: ['attribute_item'],
        },
        attribute_import_form: {
            uri: 'admin\/attribute\/import',
            methods: ['GET', 'HEAD'],
        },
        attribute_import_store: {
            uri: 'admin\/attribute\/import',
            methods: ['POST'],
        },
        attribute_store: {
            uri: 'admin\/attribute',
            methods: ['POST'],
            wheres: { attribute_store: '[0-9]+' },
        },
        attribute_update_store: {
            uri: 'admin\/attribute\/{attribute_item}',
            methods: ['PUT'],
            wheres: { attribute_item: '[0-9]+' },
            parameters: ['attribute_item'],
        },
        attribute_destroy: {
            uri: 'admin\/attribute\/{attribute_item}',
            methods: ['DELETE'],
            wheres: { attribute_item: '[0-9]+' },
            parameters: ['attribute_item'],
        },
        interest_list: {
            uri: 'admin\/interest\/list',
            methods: ['GET', 'HEAD'],
        },
        interest_import_form: {
            uri: 'admin\/interest\/import',
            methods: ['GET', 'HEAD'],
        },
        interest_import_store: {
            uri: 'admin\/interest\/import',
            methods: ['POST'],
        },
        interest_form: {
            uri: 'admin\/interest\/{interest_item?}',
            methods: ['GET', 'HEAD'],
            wheres: { interest_item: '^\\d+$' },
            parameters: ['interest_item'],
        },
        interest_store: { uri: 'admin\/interest', methods: ['POST'] },
        interest_update_store: {
            uri: 'admin\/interest\/{interest_item}',
            methods: ['PUT'],
            wheres: { interest_item: '^\\d+$' },
            parameters: ['interest_item'],
        },
        interest_destroy: {
            uri: 'admin\/interest\/{interest_item}',
            methods: ['DELETE'],
            wheres: { interest_item: '^\\d+$' },
            parameters: ['interest_item'],
        },
        interest_question_list: {
            uri: 'admin\/interest_question\/list\/{interest?}',
            methods: ['GET', 'HEAD'],
            parameters: ['interest'],
            bindings: { interest: 'id' },
        },
        interest_question_form: {
            uri: 'admin\/interest_question\/{interest}\/{id?}',
            methods: ['GET', 'HEAD'],
            wheres: { id: '^\\d+$' },
            parameters: ['interest', 'id'],
            bindings: { interest: 'id' },
        },
        interest_question_store: {
            uri: 'admin\/interest_question\/{interest}',
            methods: ['POST'],
            parameters: ['interest'],
            bindings: { interest: 'id' },
        },
        interest_question_update_store: {
            uri: 'admin\/interest_question\/{question_item}',
            methods: ['PUT'],
            wheres: { question_item: '^\\d+$' },
            parameters: ['question_item'],
        },
        interest_question_destroy: {
            uri: 'admin\/interest_question\/{question_item}',
            methods: ['DELETE'],
            wheres: { question_item: '^\\d+$' },
            parameters: ['question_item'],
        },
        package_list: { uri: 'admin\/package\/list', methods: ['GET', 'HEAD'] },
        package_form: {
            uri: 'admin\/package\/{package_item?}',
            methods: ['GET', 'HEAD'],
            wheres: { package: '^\\d+$' },
            parameters: ['package_item'],
        },
        package_store: { uri: 'admin\/package', methods: ['POST'] },
        package_update_store: {
            uri: 'admin\/package\/{package_item}',
            methods: ['PUT'],
            wheres: { package_item: '^\\d+$' },
            parameters: ['package_item'],
        },
        package_destroy: {
            uri: 'admin\/package\/{package_item}',
            methods: ['DELETE'],
            wheres: { package_item: '^\\d+$' },
            parameters: ['package_item'],
        },
        tax_list: {
            uri: 'admin\/tax\/list\/{member_package?}',
            methods: ['GET', 'HEAD'],
            parameters: ['member_package'],
        },
        tax_form: {
            uri: 'admin\/tax\/{member_package}\/{id?}',
            methods: ['GET', 'HEAD'],
            wheres: { id: '^\\d+$' },
            parameters: ['member_package', 'id'],
        },
        tax_store: {
            uri: 'admin\/tax\/{member_package}',
            methods: ['POST'],
            parameters: ['member_package'],
        },
        tax_update_store: {
            uri: 'admin\/tax\/{tax_item}',
            methods: ['PUT'],
            wheres: { tax_item: '^\\d+$' },
            parameters: ['tax_item'],
        },
        tax_destroy: {
            uri: 'admin\/tax\/{tax_item}',
            methods: ['DELETE'],
            wheres: { tax_item: '^\\d+$' },
            parameters: ['tax_item'],
        },
        discount_list: {
            uri: 'admin\/discount\/list\/{member_package?}',
            methods: ['GET', 'HEAD'],
            parameters: ['member_package'],
        },
        discount_form: {
            uri: 'admin\/discount\/{member_package}\/{id?}',
            methods: ['GET', 'HEAD'],
            wheres: { id: '^\\d+$' },
            parameters: ['member_package', 'id'],
        },
        discount_store: {
            uri: 'admin\/discount\/{member_package}',
            methods: ['POST'],
            parameters: ['member_package'],
        },
        discount_update_store: {
            uri: 'admin\/discount\/{discount_item}',
            methods: ['PUT'],
            wheres: { discount_item: '^\\d+$' },
            parameters: ['discount_item'],
        },
        discount_destroy: {
            uri: 'admin\/discount\/{discount_item}',
            methods: ['DELETE'],
            wheres: { discount_item: '^\\d+$' },
            parameters: ['discount_item'],
        },
        profile_message_list: {
            uri: 'admin\/profile_message\/list',
            methods: ['GET', 'HEAD'],
        },
        profile_message_form: {
            uri: 'admin\/profile_message\/send\/form',
            methods: ['GET', 'HEAD'],
        },
        profile_message_store: {
            uri: 'admin\/profile_message\/send',
            methods: ['POST'],
        },
        profile_message_show: {
            uri: 'admin\/profile_message\/{profile_message}',
            methods: ['GET', 'HEAD'],
            wheres: { profile_message: '[0-9]+' },
            parameters: ['profile_message'],
        },
        profile_message_destroy: {
            uri: 'admin\/profile_message\/{profile_message}',
            methods: ['DELETE'],
            wheres: { profile_message: '[0-9]+' },
            parameters: ['profile_message'],
        },
        profile_activity_list: {
            uri: 'admin\/profile_activity\/list',
            methods: ['GET', 'HEAD'],
        },
        profile_activity_form: {
            uri: 'admin\/profile_activity\/send\/form',
            methods: ['GET', 'HEAD'],
        },
        profile_activity_store: {
            uri: 'admin\/profile_activity\/send',
            methods: ['POST'],
        },
        profile_activity_show: {
            uri: 'admin\/profile_activity\/{profile_activity}',
            methods: ['GET', 'HEAD'],
            wheres: { profile_activity: '[0-9]+' },
            parameters: ['profile_activity'],
        },
        profile_activity_destroy: {
            uri: 'admin\/profile_activity\/{profile_activity}',
            methods: ['DELETE'],
            wheres: { profile_activity: '[0-9]+' },
            parameters: ['profile_activity'],
        },
        blog_post_list: { uri: 'admin\/blog\/list', methods: ['GET', 'HEAD'] },
        blog_post_form: {
            uri: 'admin\/blog\/{blog_item?}',
            methods: ['GET', 'HEAD'],
            wheres: { blog_item: '^\\d+$' },
            parameters: ['blog_item'],
        },
        blog_post_store: { uri: 'admin\/blog', methods: ['POST'] },
        blog_post_update_store: {
            uri: 'admin\/blog\/{blog_item}',
            methods: ['PUT'],
            wheres: { blog_item: '^\\d+$' },
            parameters: ['blog_item'],
        },
        blog_post_destroy: {
            uri: 'admin\/blog\/{blog_item}',
            methods: ['DELETE'],
            wheres: { blog_item: '^\\d+$' },
            parameters: ['blog_item'],
        },
        term_list: { uri: 'admin\/term\/list', methods: ['GET', 'HEAD'] },
        term_form: {
            uri: 'admin\/term\/{term_item?}',
            methods: ['GET', 'HEAD'],
            wheres: { term_item: '^\\d+$' },
            parameters: ['term_item'],
        },
        term_store: { uri: 'admin\/term', methods: ['POST'] },
        term_update_store: {
            uri: 'admin\/term\/{term_item}',
            methods: ['PUT'],
            wheres: { term_item: '^\\d+$' },
            parameters: ['term_item'],
        },
        term_destroy: {
            uri: 'admin\/term\/{term_item}',
            methods: ['DELETE'],
            wheres: { term_item: '^\\d+$' },
            parameters: ['term_item'],
        },
        member_package_list: {
            uri: 'admin\/member_package\/list',
            methods: ['GET', 'HEAD'],
        },
        admin_profile_package_form: {
            uri: 'admin\/profile\/package\/add\/{uuid}',
            methods: ['GET', 'HEAD'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        admin_profile_package_list: {
            uri: 'admin\/profile\/package\/list\/{uuid}',
            methods: ['GET', 'HEAD'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        admin_profile_package_view: {
            uri: 'admin\/profile\/package\/{uuid}',
            methods: ['GET', 'HEAD'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        admin_profile_interest_form: {
            uri: 'admin\/profile\/interest\/{uuid?}',
            methods: ['GET', 'HEAD'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        profile_create_form: {
            uri: 'admin\/profile\/create',
            methods: ['GET', 'HEAD'],
        },
        profile_create_store: {
            uri: 'admin\/profile\/create',
            methods: ['POST'],
        },
        admin_profile_list: {
            uri: 'admin\/profile\/list',
            methods: ['GET', 'HEAD'],
        },
        admin_profile_update_form: {
            uri: 'admin\/profile\/update\/{uuid}',
            methods: ['GET', 'HEAD'],
            wheres: {
                uuid: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
            parameters: ['uuid'],
        },
        content_generate_form: {
            uri: 'admin\/content\/generate',
            methods: ['GET', 'HEAD'],
        },
        content_generate_store: {
            uri: 'admin\/content\/generate',
            methods: ['POST'],
        },
        generate_profile_form: {
            uri: 'admin\/profile\/generate',
            methods: ['GET', 'HEAD'],
        },
        generate_profile_store: {
            uri: 'admin\/profile\/generate',
            methods: ['POST'],
        },
        delete_fake_profile_store: {
            uri: 'admin\/profile\/fake',
            methods: ['DELETE'],
        },
    },
};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
