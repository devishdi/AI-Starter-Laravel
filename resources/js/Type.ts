import type { PageProps } from '@inertiajs/core';
import { PaginationLinkInterface } from './Components/ui/Pagination';

export const DEFAULT_SELECTBOX_OPTION = {
    label: '',
    value: '',
};

export const CLIENT_API_ERROR = { message: 'Error occured', status: 'error' };

export type Gender = 'M' | 'F';

export type METHOD = 'POST' | 'GET' | 'PUT' | 'DELETE';

export type RESPONSE_STATUS = 'error' | 'success' | 'not_valid' | 'denied';

export interface SitePageProps extends PageProps {
    flash: FlashMessage;
    auth: {
        user: CurrentUser | null;
    };
    selectBox: {
        createdFor?: SelectBoxOptions[];
        caste?: SelectBoxOptions[];
        default?: {
            caste: string;
        };
    };
}

export interface KeyValuePairs {
    [key: string]: string | number;
}

export interface FlashMessage {
    success?: string;
    error?: string;
    warning?: string;
}

export interface CurrentUser {
    mmid: string;
    uuid: string;
    email: string;
    mobile: string;
    customerName: string;
}

export interface User {
    customer_name?: string;
    email: string;
    mmid: string;
    mobile: string;
    role: string;
    status: boolean;
    uuid: string;
    email_verified_at?: string;
    login?: string;
    updated_at?: string;
    created_at?: string;
}

export interface SelectBoxOptions {
    value: string;
    label: string;
}

export interface AttributeType {
    id: string;
    type: string;
    description?: string;
    updated_at?: string;
    created_at?: string;
}

export interface Attribute {
    id: number;
    key: string;
    type: string;
    title: string;
    type_description?: string;
    text?: string;
    weight: number;
    updated_at?: string;
    created_at?: string;
}

export interface Package {
    id: string;
    name: string;
    features: string;
    validity: string | number;
    amount: string | number;
    in_use: boolean;
    updated_at?: string;
    created_at?: string;
    tax?: Tax[];
    discount?: Discount[];
}

export interface Tax {
    id: string;
    amount: string | number;
    type: Attribute;
    in_percentage: boolean;
    in_use: boolean;
    updated_at?: string;
    created_at?: string;
    package?: Package;
}

export interface Discount {
    id: string;
    amount: string | number;
    type: Attribute;
    in_percentage: boolean;
    in_use: boolean;
    updated_at?: string;
    created_at?: string;
    package?: Package;
}

export interface Term {
    id: string;
    type: string;
    text: string;
    in_use: boolean;
    updated_at?: string;
    created_at?: string;
}

export interface BlogPost {
    id: string;
    user_id: number;
    title: string;
    slug: string;
    excerpt?: string;
    content: string;
    status: string;
    published_at?: string;
    created_at?: string;
    updated_at?: string;
}

export interface ProfileMessage {
    id: number;
    user_id: number;
    recipient_user_id: number;
    type: string;
    subject: string;
    message: string;
    category?: string;
    category_id?: number;
    status?: number;
    sender_name?: string;
    recipient_name?: string;
    sender_mmid?: string;
    recipient_mmid?: string;
    created_at?: string;
    updated_at?: string;
    sender?: { id: number; mmid: string; customer_name: string };
    recipient?: { id: number; mmid: string; customer_name: string };
}

export interface Interest {
    id: string;
    interest_key: string;
    interest_type: string;
    type: Attribute;
    interest_value: string;
    in_use: boolean;
    updated_at?: string;
    created_at?: string;
}

export interface InterestQuestion {
    id: string;
    interest_key: string;
    interest: Interest;
    question: string;
    gender: string;
    in_use: boolean;
    updated_at?: string;
    created_at?: string;
}

export interface DefaultValues {
    userStatus: boolean;
    userRole: number;
    motherTongue: string;
    firstMarriage: boolean;
    autopay: boolean;
    idSubmitted: boolean;
    country: string;
    caste: string;
}

export interface Profile {
    first_name?: string;
    last_name?: string;
    sur_name?: string;
    gender?: Gender;
    age?: number;
    dob?: string;
    country?: string;
    first_marriage?: boolean;
    id_submitted?: boolean;
    created_for?: string;
    caste?: string;
    sub_caste?: string;
    religious_edu?: string;
    self_desc?: string;
    partner_desc?: string;
    siblings?: string;
    mother_tongue?: string;
    autopay?: boolean;
    rel_interpretation?: string;
}

export interface ProfilePhoto {
    id: number;
    url: string;
    caption?: string;
    is_default: boolean;
    created_at: string;
    data?: string;
}

export interface ProfileMembership {
    id: number;
    package?: Package;
    payment_method: string;
    start_at: string;
    end_at: string;
    package_cost: number;
    tax: number;
    discount: number;
    other_expense: number;
    in_use: boolean;
    created_by: string;
    created_at: string;
    deleted_at: string;
}

export interface ProfileAddress {
    id?: number;
    address?: string;
    land_mark?: string;
    state?: string;
    city?: string;
    district?: string;
    country?: string;
    pin?: number;
    address_type?: string;
    is_default?: boolean;
    created_at?: string;
}

export interface ProfileSibling {
    id: number;
    name: string;
    edu: string;
    job: string;
    relation: string;
    marital_status: string;
    gender: string;
    description: string;
    created_at?: string;
}

export interface ProfileMarriage {
    id: number;
    start_at: string;
    end_at: string;
    reason: string;
    order: number;
    kids: number;
    kids_detail: string;
    liability: boolean;
    created_at?: string;
}

export interface ProfileFamily {
    father_name: string;
    mother_name: string;
    family_name: string;
    father_edu: string;
    mother_edu: string;
    father_job: string;
    mother_job: string;
    family_status: string;
    religious_status: string;
    income: string;
    family_mobile: number;
    family_phone: number;
    description: string;
    created_at?: string;
}

export interface ProfilePhysical {
    height: number;
    weight: number;
    body_type: string;
    color: string;
    skin: string;
    character: string;
    specs: boolean;
    disability: boolean;
    text: string;
    created_at?: string;
}

export interface ProfileLanguage {
    id: number;
    language: string;
    proficiency: string;
    created_at?: string;
}

export interface ProfileInterest {
    id: number;
    interest_key: string;
    interest?: Interest;
    created_at?: string;
}

export interface ProfileJob {
    id: number;
    job: string;
    job_type: string;
    job_location: string;
    salary_range: string;
    job_other: string;
    start_at: string;
    end_at: string;
    current_job: boolean;
    created_at?: string;
}

export interface ProfileEducation {
    id: number;
    edu_type: string;
    edu: string;
    rank: string;
    college: string;
    start_at: string;
    end_at: string;
    latest: boolean;
    created_at?: string;
}

export interface MessageItem {
    id: number;
    category: string;
    category_id: string;
    message: string;
    subject: string;
    recipient_mmid: string;
    recipient_name: string;
    sender_mmid: string;
    sender_name: string;
    status: string;
    created_at?: string;
}

export interface ProfilePartnerChoice {
    age_min?: string[];
    age_max?: string[];
    edu?: string[];
    job?: string[];
    sub_caste?: string[];
    family_status?: string[];
    religious_edu?: string[];
    religious_status?: string[];
    rel_interpretation?: string[];
    language?: string[];
    income?: string[];
    height_min?: string[];
    height_max?: string[];
    weight_min?: string[];
    weight_max?: string[];
    city?: string[];
    first_marriage?: string[];
    state?: string[];
    district?: string[];
    character?: string[];
    body_type?: string[];
    color?: string[];
    skin?: string[];
}

export interface UserProfile extends User {
    profile: Profile;
    photo: ProfilePhoto[];
    membership: ProfileMembership;
    address: ProfileAddress[];
    family: ProfileFamily;
    physical: ProfilePhysical;
    language: ProfileLanguage[];
    job: ProfileJob[];
    education: ProfileEducation[];
    sibling: ProfileSibling[];
    marriage: ProfileMarriage[];
}

export interface PartnerProfile extends User {
    profile: Profile;
    photo: ProfilePhoto;
    address: ProfileAddress;
    family: ProfileFamily;
    physical: ProfilePhysical;
    language: ProfileLanguage;
    job: ProfileJob;
    education: ProfileEducation;
}

export interface ImageItem {
    width: number;
    height: number;
    src: string;
    id?: string;
    result: string | ArrayBuffer;
}

export interface FileItem {
    src: string;
    id?: string;
}

export interface ApiResponse<T, E> {
    data?: T;
    status: RESPONSE_STATUS;
    message?: string;
    error?: E;
}

export interface OtpResponse {
    otp?: number;
}

export interface MenuItemChildInterface {
    route: string;
    title: string;
}

export interface MenuItemInterface {
    type: string;
    title: string;
    links: MenuItemChildInterface[];
}

export interface PartnerGridInterface {
    data: PartnerGridDataInterface[];
    total: number;
    link?: PaginationLinkInterface[];
    pagination?: boolean;
}

export interface PartnerGridDataInterface {
    data_id: string;
    partner_uuid: string;
    partner_name: string;
    photo?: string;
}
