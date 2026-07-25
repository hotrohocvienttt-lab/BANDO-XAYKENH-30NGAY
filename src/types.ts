export interface ProductLead {
  id: string;
  createdAt: string;
  fullName: string;
  phone: string;
  email: string;
  role: string;
  businessType: string;
  participationPreference: string;
  consentAgreed?: boolean;
  status: "new_lead" | "contacted" | "paid" | "completed" | "cancelled";
}

export interface TrackingEvent {
  id: string;
  timestamp: string;
  eventName:
    | "page_view"
    | "hero_cta_click"
    | "roadmap_view"
    | "product_stack_view"
    | "trainer_view"
    | "case_study_view"
    | "pricing_view"
    | "form_started"
    | "form_submitted"
    | "exit_popup_open"
    | "zalo_click";
  details?: string;
}
