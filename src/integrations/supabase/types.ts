export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      bd_adm_convites: {
        Row: {
          created_at: string | null
          created_by: string | null
          email: string
          expires_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          status: string | null
          token: string
          used_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          email: string
          expires_at: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          status?: string | null
          token?: string
          used_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          email?: string
          expires_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          status?: string | null
          token?: string
          used_at?: string | null
        }
        Relationships: []
      }
      bd_adm_docs: {
        Row: {
          created_at: string | null
          id: string
          name: string
          uploaded_by: string | null
          url: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          uploaded_by?: string | null
          url: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          uploaded_by?: string | null
          url?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_documents_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "bd_adm_perfis"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_documents_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "bd_adm_perfis"
            referencedColumns: ["id"]
          },
        ]
      }
      bd_adm_perfis: {
        Row: {
          address: string | null
          birth_date: string | null
          business_email: string | null
          cpf: string | null
          created_at: string | null
          employment_type: string | null
          friendly_id: string | null
          full_name: string | null
          id: string
          instagram: string | null
          is_active: boolean | null
          job_title: string | null
          joined_at: string | null
          linked_since: string | null
          linkedin: string | null
          payment_info: Json | null
          phone: string | null
          photo_url: string | null
          preferences: Json | null
          secondary_email: string | null
          social_links: Json | null
          start_date: string | null
          updated_at: string | null
          whatsapp: string | null
        }
        Insert: {
          address?: string | null
          birth_date?: string | null
          business_email?: string | null
          cpf?: string | null
          created_at?: string | null
          employment_type?: string | null
          friendly_id?: string | null
          full_name?: string | null
          id: string
          instagram?: string | null
          is_active?: boolean | null
          job_title?: string | null
          joined_at?: string | null
          linked_since?: string | null
          linkedin?: string | null
          payment_info?: Json | null
          phone?: string | null
          photo_url?: string | null
          preferences?: Json | null
          secondary_email?: string | null
          social_links?: Json | null
          start_date?: string | null
          updated_at?: string | null
          whatsapp?: string | null
        }
        Update: {
          address?: string | null
          birth_date?: string | null
          business_email?: string | null
          cpf?: string | null
          created_at?: string | null
          employment_type?: string | null
          friendly_id?: string | null
          full_name?: string | null
          id?: string
          instagram?: string | null
          is_active?: boolean | null
          job_title?: string | null
          joined_at?: string | null
          linked_since?: string | null
          linkedin?: string | null
          payment_info?: Json | null
          phone?: string | null
          photo_url?: string | null
          preferences?: Json | null
          secondary_email?: string | null
          social_links?: Json | null
          start_date?: string | null
          updated_at?: string | null
          whatsapp?: string | null
        }
        Relationships: []
      }
      bd_adm_permissoes: {
        Row: {
          category: string
          code: string
          id: string
          label: string
        }
        Insert: {
          category: string
          code: string
          id?: string
          label: string
        }
        Update: {
          category?: string
          code?: string
          id?: string
          label?: string
        }
        Relationships: []
      }
      bd_adm_role_perms: {
        Row: {
          permission_id: string
          role: Database["public"]["Enums"]["app_role"]
        }
        Insert: {
          permission_id: string
          role: Database["public"]["Enums"]["app_role"]
        }
        Update: {
          permission_id?: string
          role?: Database["public"]["Enums"]["app_role"]
        }
        Relationships: [
          {
            foreignKeyName: "role_permissions_permission_id_fkey"
            columns: ["permission_id"]
            isOneToOne: false
            referencedRelation: "bd_adm_permissoes"
            referencedColumns: ["id"]
          },
        ]
      }
      bd_adm_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      bd_alert_config: {
        Row: {
          active: boolean
          alert_type: string
          created_at: string
          id: string
          name: string
          phone: string
          session_name: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          alert_type?: string
          created_at?: string
          id?: string
          name: string
          phone: string
          session_name?: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          alert_type?: string
          created_at?: string
          id?: string
          name?: string
          phone?: string
          session_name?: string
          updated_at?: string
        }
        Relationships: []
      }
      bd_assinaturas: {
        Row: {
          attempt_count: number | null
          cancel_at_period_end: boolean | null
          canceled_at: string | null
          cliente_id: number | null
          collection_method: string | null
          created_at: string | null
          currency: string | null
          current_period_end: string | null
          current_period_start: string | null
          customer_email: string | null
          customer_name: string | null
          customer_phone: string | null
          data_ultimo_pagamento_sucesso: string | null
          days_past_due: number | null
          desconto_aplicado: string | null
          effective_invoice_created_at: string | null
          effective_invoice_id: string | null
          effective_invoice_status: string | null
          id: string
          intervalo_cobranca: string | null
          invoice_due_date: string | null
          last_decline_reason: string | null
          last_payment_attempt: string | null
          latest_invoice_amount: number | null
          latest_invoice_id: string | null
          latest_invoice_status: string | null
          latest_invoice_url: string | null
          next_payment_attempt: string | null
          open_invoices_count: number | null
          open_invoices_problem: number | null
          open_invoices_provisional: number | null
          open_invoices_total: number | null
          pause_collection: boolean | null
          pause_resumes_at: string | null
          payment_method_brand: string | null
          payment_method_last4: string | null
          payment_method_type: string | null
          promo_code: string | null
          protected: boolean | null
          raw_data: Json | null
          status: string
          stripe_customer_id: string
          stripe_price_id: string | null
          stripe_subscription_id: string
          subscription_created_at: string
          synced_at: string | null
          tier: string | null
          upcoming_invoice_amount: number | null
          valor: number | null
          valor_plano_cheio: number | null
          valor_total_pago: number | null
        }
        Insert: {
          attempt_count?: number | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          cliente_id?: number | null
          collection_method?: string | null
          created_at?: string | null
          currency?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          customer_email?: string | null
          customer_name?: string | null
          customer_phone?: string | null
          data_ultimo_pagamento_sucesso?: string | null
          days_past_due?: number | null
          desconto_aplicado?: string | null
          effective_invoice_created_at?: string | null
          effective_invoice_id?: string | null
          effective_invoice_status?: string | null
          id?: string
          intervalo_cobranca?: string | null
          invoice_due_date?: string | null
          last_decline_reason?: string | null
          last_payment_attempt?: string | null
          latest_invoice_amount?: number | null
          latest_invoice_id?: string | null
          latest_invoice_status?: string | null
          latest_invoice_url?: string | null
          next_payment_attempt?: string | null
          open_invoices_count?: number | null
          open_invoices_problem?: number | null
          open_invoices_provisional?: number | null
          open_invoices_total?: number | null
          pause_collection?: boolean | null
          pause_resumes_at?: string | null
          payment_method_brand?: string | null
          payment_method_last4?: string | null
          payment_method_type?: string | null
          promo_code?: string | null
          protected?: boolean | null
          raw_data?: Json | null
          status: string
          stripe_customer_id: string
          stripe_price_id?: string | null
          stripe_subscription_id: string
          subscription_created_at: string
          synced_at?: string | null
          tier?: string | null
          upcoming_invoice_amount?: number | null
          valor?: number | null
          valor_plano_cheio?: number | null
          valor_total_pago?: number | null
        }
        Update: {
          attempt_count?: number | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          cliente_id?: number | null
          collection_method?: string | null
          created_at?: string | null
          currency?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          customer_email?: string | null
          customer_name?: string | null
          customer_phone?: string | null
          data_ultimo_pagamento_sucesso?: string | null
          days_past_due?: number | null
          desconto_aplicado?: string | null
          effective_invoice_created_at?: string | null
          effective_invoice_id?: string | null
          effective_invoice_status?: string | null
          id?: string
          intervalo_cobranca?: string | null
          invoice_due_date?: string | null
          last_decline_reason?: string | null
          last_payment_attempt?: string | null
          latest_invoice_amount?: number | null
          latest_invoice_id?: string | null
          latest_invoice_status?: string | null
          latest_invoice_url?: string | null
          next_payment_attempt?: string | null
          open_invoices_count?: number | null
          open_invoices_problem?: number | null
          open_invoices_provisional?: number | null
          open_invoices_total?: number | null
          pause_collection?: boolean | null
          pause_resumes_at?: string | null
          payment_method_brand?: string | null
          payment_method_last4?: string | null
          payment_method_type?: string | null
          promo_code?: string | null
          protected?: boolean | null
          raw_data?: Json | null
          status?: string
          stripe_customer_id?: string
          stripe_price_id?: string | null
          stripe_subscription_id?: string
          subscription_created_at?: string
          synced_at?: string | null
          tier?: string | null
          upcoming_invoice_amount?: number | null
          valor?: number | null
          valor_plano_cheio?: number | null
          valor_total_pago?: number | null
        }
        Relationships: []
      }
      bd_avaliacao_envio: {
        Row: {
          contato: string | null
          created_at: string | null
          data_envio: string | null
          data_envio_raw: string | null
          data_input: string | null
          id: string
          nome: string
          os: string | null
          sucesso: string | null
          tec_id: string | null
        }
        Insert: {
          contato?: string | null
          created_at?: string | null
          data_envio?: string | null
          data_envio_raw?: string | null
          data_input?: string | null
          id?: string
          nome: string
          os?: string | null
          sucesso?: string | null
          tec_id?: string | null
        }
        Update: {
          contato?: string | null
          created_at?: string | null
          data_envio?: string | null
          data_envio_raw?: string | null
          data_input?: string | null
          id?: string
          nome?: string
          os?: string | null
          sucesso?: string | null
          tec_id?: string | null
        }
        Relationships: []
      }
      bd_checkout_logs: {
        Row: {
          coupon_code: string | null
          created_at: string
          customer_document: string | null
          customer_email: string | null
          customer_name: string | null
          customer_phone: string | null
          duration: number | null
          error_message: string | null
          event_id: string | null
          event_type: string
          field_name: string | null
          id: string
          metadata: Json | null
          origin: string | null
          plan_id: string | null
          plan_name: string | null
          plan_price: number | null
          session_id: string | null
          stage: string | null
          stripe_error_code: string | null
          stripe_error_message: string | null
          timestamp: string
          total_duration: number | null
        }
        Insert: {
          coupon_code?: string | null
          created_at?: string
          customer_document?: string | null
          customer_email?: string | null
          customer_name?: string | null
          customer_phone?: string | null
          duration?: number | null
          error_message?: string | null
          event_id?: string | null
          event_type: string
          field_name?: string | null
          id?: string
          metadata?: Json | null
          origin?: string | null
          plan_id?: string | null
          plan_name?: string | null
          plan_price?: number | null
          session_id?: string | null
          stage?: string | null
          stripe_error_code?: string | null
          stripe_error_message?: string | null
          timestamp?: string
          total_duration?: number | null
        }
        Update: {
          coupon_code?: string | null
          created_at?: string
          customer_document?: string | null
          customer_email?: string | null
          customer_name?: string | null
          customer_phone?: string | null
          duration?: number | null
          error_message?: string | null
          event_id?: string | null
          event_type?: string
          field_name?: string | null
          id?: string
          metadata?: Json | null
          origin?: string | null
          plan_id?: string | null
          plan_name?: string | null
          plan_price?: number | null
          session_id?: string | null
          stage?: string | null
          stripe_error_code?: string | null
          stripe_error_message?: string | null
          timestamp?: string
          total_duration?: number | null
        }
        Relationships: []
      }
      bd_cliente: {
        Row: {
          aceite_termo: string | null
          ano1: string | null
          ano2: string | null
          ano3: string | null
          ano4: string | null
          apt: string | null
          apt2: string | null
          bairro_end1: string | null
          bairro_end2: string | null
          carrotipo1: string | null
          carrotipo2: string | null
          carrotipo3: string | null
          carrotipo4: string | null
          cep: string | null
          cep2: string | null
          cidade1: string | null
          cidade2: string | null
          como_nos_achou: string | null
          condo: string | null
          condo2: string | null
          contato: string | null
          contrato: string | null
          cor1: string | null
          cor2: string | null
          cor3: string | null
          cor4: string | null
          cpf_cnpj: string | null
          cupom: string | null
          dt_cadastro: string | null
          dt_nasc: string | null
          e_mail: string | null
          end_principal: string | null
          end_secundario: string | null
          fipe1: number | null
          fipe2: number | null
          fipe3: number | null
          fipe4: number | null
          form_dispositivo: string | null
          form_interacoes: string | null
          form_ip: string | null
          form_sistema: string | null
          form_temp: string | null
          garagem1: string | null
          garagem2: string | null
          genero: string | null
          hora_cadastro: string | null
          id: number
          id_stripe: string | null
          id_stripe_ass: string | null
          id_stripe_pg: string | null
          marca1: string | null
          marca2: string | null
          marca3: string | null
          marca4: string | null
          modelo1: string | null
          modelo2: string | null
          modelo3: string | null
          modelo4: string | null
          n: string | null
          n2: string | null
          nome: string | null
          pg_cpf: string | null
          pg_email: string | null
          pg_nome: string | null
          pg_telefone: string | null
          placa1: string | null
          placa2: string | null
          placa3: string | null
          placa4: string | null
          plano: string | null
          referencia1: string | null
          referencia2: string | null
          referencia3: string | null
          referencia4: string | null
          tipo_endereco: string | null
          tipo_endereco2: string | null
          torre: string | null
          torre2: string | null
          uf1: string | null
          uf2: string | null
          vaga1: string | null
          vaga2: string | null
          vaga3: string | null
          vaga4: string | null
          valor: number | null
        }
        Insert: {
          aceite_termo?: string | null
          ano1?: string | null
          ano2?: string | null
          ano3?: string | null
          ano4?: string | null
          apt?: string | null
          apt2?: string | null
          bairro_end1?: string | null
          bairro_end2?: string | null
          carrotipo1?: string | null
          carrotipo2?: string | null
          carrotipo3?: string | null
          carrotipo4?: string | null
          cep?: string | null
          cep2?: string | null
          cidade1?: string | null
          cidade2?: string | null
          como_nos_achou?: string | null
          condo?: string | null
          condo2?: string | null
          contato?: string | null
          contrato?: string | null
          cor1?: string | null
          cor2?: string | null
          cor3?: string | null
          cor4?: string | null
          cpf_cnpj?: string | null
          cupom?: string | null
          dt_cadastro?: string | null
          dt_nasc?: string | null
          e_mail?: string | null
          end_principal?: string | null
          end_secundario?: string | null
          fipe1?: number | null
          fipe2?: number | null
          fipe3?: number | null
          fipe4?: number | null
          form_dispositivo?: string | null
          form_interacoes?: string | null
          form_ip?: string | null
          form_sistema?: string | null
          form_temp?: string | null
          garagem1?: string | null
          garagem2?: string | null
          genero?: string | null
          hora_cadastro?: string | null
          id?: number
          id_stripe?: string | null
          id_stripe_ass?: string | null
          id_stripe_pg?: string | null
          marca1?: string | null
          marca2?: string | null
          marca3?: string | null
          marca4?: string | null
          modelo1?: string | null
          modelo2?: string | null
          modelo3?: string | null
          modelo4?: string | null
          n?: string | null
          n2?: string | null
          nome?: string | null
          pg_cpf?: string | null
          pg_email?: string | null
          pg_nome?: string | null
          pg_telefone?: string | null
          placa1?: string | null
          placa2?: string | null
          placa3?: string | null
          placa4?: string | null
          plano?: string | null
          referencia1?: string | null
          referencia2?: string | null
          referencia3?: string | null
          referencia4?: string | null
          tipo_endereco?: string | null
          tipo_endereco2?: string | null
          torre?: string | null
          torre2?: string | null
          uf1?: string | null
          uf2?: string | null
          vaga1?: string | null
          vaga2?: string | null
          vaga3?: string | null
          vaga4?: string | null
          valor?: number | null
        }
        Update: {
          aceite_termo?: string | null
          ano1?: string | null
          ano2?: string | null
          ano3?: string | null
          ano4?: string | null
          apt?: string | null
          apt2?: string | null
          bairro_end1?: string | null
          bairro_end2?: string | null
          carrotipo1?: string | null
          carrotipo2?: string | null
          carrotipo3?: string | null
          carrotipo4?: string | null
          cep?: string | null
          cep2?: string | null
          cidade1?: string | null
          cidade2?: string | null
          como_nos_achou?: string | null
          condo?: string | null
          condo2?: string | null
          contato?: string | null
          contrato?: string | null
          cor1?: string | null
          cor2?: string | null
          cor3?: string | null
          cor4?: string | null
          cpf_cnpj?: string | null
          cupom?: string | null
          dt_cadastro?: string | null
          dt_nasc?: string | null
          e_mail?: string | null
          end_principal?: string | null
          end_secundario?: string | null
          fipe1?: number | null
          fipe2?: number | null
          fipe3?: number | null
          fipe4?: number | null
          form_dispositivo?: string | null
          form_interacoes?: string | null
          form_ip?: string | null
          form_sistema?: string | null
          form_temp?: string | null
          garagem1?: string | null
          garagem2?: string | null
          genero?: string | null
          hora_cadastro?: string | null
          id?: number
          id_stripe?: string | null
          id_stripe_ass?: string | null
          id_stripe_pg?: string | null
          marca1?: string | null
          marca2?: string | null
          marca3?: string | null
          marca4?: string | null
          modelo1?: string | null
          modelo2?: string | null
          modelo3?: string | null
          modelo4?: string | null
          n?: string | null
          n2?: string | null
          nome?: string | null
          pg_cpf?: string | null
          pg_email?: string | null
          pg_nome?: string | null
          pg_telefone?: string | null
          placa1?: string | null
          placa2?: string | null
          placa3?: string | null
          placa4?: string | null
          plano?: string | null
          referencia1?: string | null
          referencia2?: string | null
          referencia3?: string | null
          referencia4?: string | null
          tipo_endereco?: string | null
          tipo_endereco2?: string | null
          torre?: string | null
          torre2?: string | null
          uf1?: string | null
          uf2?: string | null
          vaga1?: string | null
          vaga2?: string | null
          vaga3?: string | null
          vaga4?: string | null
          valor?: number | null
        }
        Relationships: []
      }
      bd_cliente_endereco: {
        Row: {
          ativo: boolean | null
          bairro: string | null
          cep: string | null
          cidade: string | null
          complemento: string | null
          condominio: string | null
          cpf_cnpj: string | null
          created_at: string | null
          garagem: string | null
          id_cliente: number
          logradouro: string | null
          nome: string | null
          numero: string | null
          prioridade: string | null
          tipo_endereco: string | null
          torre: string | null
          uf: string | null
          updated_at: string | null
          uuid: string
        }
        Insert: {
          ativo?: boolean | null
          bairro?: string | null
          cep?: string | null
          cidade?: string | null
          complemento?: string | null
          condominio?: string | null
          cpf_cnpj?: string | null
          created_at?: string | null
          garagem?: string | null
          id_cliente: number
          logradouro?: string | null
          nome?: string | null
          numero?: string | null
          prioridade?: string | null
          tipo_endereco?: string | null
          torre?: string | null
          uf?: string | null
          updated_at?: string | null
          uuid?: string
        }
        Update: {
          ativo?: boolean | null
          bairro?: string | null
          cep?: string | null
          cidade?: string | null
          complemento?: string | null
          condominio?: string | null
          cpf_cnpj?: string | null
          created_at?: string | null
          garagem?: string | null
          id_cliente?: number
          logradouro?: string | null
          nome?: string | null
          numero?: string | null
          prioridade?: string | null
          tipo_endereco?: string | null
          torre?: string | null
          uf?: string | null
          updated_at?: string | null
          uuid?: string
        }
        Relationships: []
      }
      bd_cms_conteudo: {
        Row: {
          content: Json
          created_at: string
          id: string
          updated_at: string
        }
        Insert: {
          content: Json
          created_at?: string
          id?: string
          updated_at?: string
        }
        Update: {
          content?: Json
          created_at?: string
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      bd_cms_history: {
        Row: {
          action: string
          changed_at: string
          changed_by: string | null
          id: string
          new_data: Json | null
          old_data: Json | null
          record_id: string | null
          record_key: string | null
          table_name: string
        }
        Insert: {
          action: string
          changed_at?: string
          changed_by?: string | null
          id?: string
          new_data?: Json | null
          old_data?: Json | null
          record_id?: string | null
          record_key?: string | null
          table_name: string
        }
        Update: {
          action?: string
          changed_at?: string
          changed_by?: string | null
          id?: string
          new_data?: Json | null
          old_data?: Json | null
          record_id?: string | null
          record_key?: string | null
          table_name?: string
        }
        Relationships: []
      }
      bd_cms_lp: {
        Row: {
          config: Json
          created_at: string
          id: string
          lp_key: string
          name: string
          overrides: Json | null
          seo: Json
          slug: string
          status: string
          tracking: Json
          updated_at: string
        }
        Insert: {
          config?: Json
          created_at?: string
          id?: string
          lp_key: string
          name: string
          overrides?: Json | null
          seo?: Json
          slug: string
          status?: string
          tracking?: Json
          updated_at?: string
        }
        Update: {
          config?: Json
          created_at?: string
          id?: string
          lp_key?: string
          name?: string
          overrides?: Json | null
          seo?: Json
          slug?: string
          status?: string
          tracking?: Json
          updated_at?: string
        }
        Relationships: []
      }
      bd_cms_lp_v2: {
        Row: {
          content: Json
          created_at: string | null
          id: string
          lp_key: string
          name: string
          slug: string
          status: string
          updated_at: string | null
        }
        Insert: {
          content?: Json
          created_at?: string | null
          id?: string
          lp_key: string
          name: string
          slug: string
          status?: string
          updated_at?: string | null
        }
        Update: {
          content?: Json
          created_at?: string | null
          id?: string
          lp_key?: string
          name?: string
          slug?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      bd_cms_tracking: {
        Row: {
          enabled: boolean
          id: string
          pixel_id: string
          platform: string
          updated_at: string
        }
        Insert: {
          enabled?: boolean
          id?: string
          pixel_id?: string
          platform: string
          updated_at?: string
        }
        Update: {
          enabled?: boolean
          id?: string
          pixel_id?: string
          platform?: string
          updated_at?: string
        }
        Relationships: []
      }
      bd_cupons_config: {
        Row: {
          allowed_plan_ids: string[] | null
          blocked_emails: string[] | null
          coupon_code: string
          created_at: string | null
          id: string
          last_used_at: string | null
          last_used_by_email: string | null
          notes: string | null
          stripe_promotion_code_id: string
          updated_at: string | null
          usage_count: number | null
        }
        Insert: {
          allowed_plan_ids?: string[] | null
          blocked_emails?: string[] | null
          coupon_code: string
          created_at?: string | null
          id?: string
          last_used_at?: string | null
          last_used_by_email?: string | null
          notes?: string | null
          stripe_promotion_code_id: string
          updated_at?: string | null
          usage_count?: number | null
        }
        Update: {
          allowed_plan_ids?: string[] | null
          blocked_emails?: string[] | null
          coupon_code?: string
          created_at?: string | null
          id?: string
          last_used_at?: string | null
          last_used_by_email?: string | null
          notes?: string | null
          stripe_promotion_code_id?: string
          updated_at?: string | null
          usage_count?: number | null
        }
        Relationships: []
      }
      bd_financeiro_projecao: {
        Row: {
          data_disponivel: string | null
          data_liberacao: string
          id: string
          origem: string | null
          qtd_transacoes: number | null
          synced_at: string | null
          valor_liquido: number
        }
        Insert: {
          data_disponivel?: string | null
          data_liberacao: string
          id?: string
          origem?: string | null
          qtd_transacoes?: number | null
          synced_at?: string | null
          valor_liquido?: number
        }
        Update: {
          data_disponivel?: string | null
          data_liberacao?: string
          id?: string
          origem?: string | null
          qtd_transacoes?: number | null
          synced_at?: string | null
          valor_liquido?: number
        }
        Relationships: []
      }
      bd_financeiro_repasses: {
        Row: {
          amount: number
          arrival_date: string
          automatic: boolean | null
          balance_transaction_id: string | null
          created: string
          currency: string | null
          description: string | null
          destination_bank: string | null
          failure_code: string | null
          failure_message: string | null
          fonte: string | null
          id: string
          method: string | null
          raw_json: Json | null
          source_type: string | null
          status: string
          stripe_payout_id: string
          synced_at: string | null
        }
        Insert: {
          amount: number
          arrival_date: string
          automatic?: boolean | null
          balance_transaction_id?: string | null
          created: string
          currency?: string | null
          description?: string | null
          destination_bank?: string | null
          failure_code?: string | null
          failure_message?: string | null
          fonte?: string | null
          id?: string
          method?: string | null
          raw_json?: Json | null
          source_type?: string | null
          status: string
          stripe_payout_id: string
          synced_at?: string | null
        }
        Update: {
          amount?: number
          arrival_date?: string
          automatic?: boolean | null
          balance_transaction_id?: string | null
          created?: string
          currency?: string | null
          description?: string | null
          destination_bank?: string | null
          failure_code?: string | null
          failure_message?: string | null
          fonte?: string | null
          id?: string
          method?: string | null
          raw_json?: Json | null
          source_type?: string | null
          status?: string
          stripe_payout_id?: string
          synced_at?: string | null
        }
        Relationships: []
      }
      bd_form_lp: {
        Row: {
          created_at: string
          form_data: Json
          id: string
          ip_address: string | null
          lp_id: string
          origin_url: string | null
          user_agent: string | null
        }
        Insert: {
          created_at?: string
          form_data?: Json
          id?: string
          ip_address?: string | null
          lp_id: string
          origin_url?: string | null
          user_agent?: string | null
        }
        Update: {
          created_at?: string
          form_data?: Json
          id?: string
          ip_address?: string | null
          lp_id?: string
          origin_url?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      bd_health_daily_summary: {
        Row: {
          avg_latency_ms: number | null
          created_at: string
          failed_checks: number | null
          id: string
          incidents_count: number | null
          max_latency_ms: number | null
          min_latency_ms: number | null
          service_name: string
          successful_checks: number | null
          summary_date: string
          total_checks: number | null
          uptime_percentage: number | null
        }
        Insert: {
          avg_latency_ms?: number | null
          created_at?: string
          failed_checks?: number | null
          id?: string
          incidents_count?: number | null
          max_latency_ms?: number | null
          min_latency_ms?: number | null
          service_name: string
          successful_checks?: number | null
          summary_date: string
          total_checks?: number | null
          uptime_percentage?: number | null
        }
        Update: {
          avg_latency_ms?: number | null
          created_at?: string
          failed_checks?: number | null
          id?: string
          incidents_count?: number | null
          max_latency_ms?: number | null
          min_latency_ms?: number | null
          service_name?: string
          successful_checks?: number | null
          summary_date?: string
          total_checks?: number | null
          uptime_percentage?: number | null
        }
        Relationships: []
      }
      bd_limper: {
        Row: {
          aceite_termo: boolean | null
          agencia: string | null
          aprovado_por: string | null
          bairro: string | null
          banco: string | null
          cep: string | null
          cidade: string | null
          conta: string | null
          contato_emergencia: string | null
          cpf: string | null
          data_aprovacao: string | null
          data_cadastro: string | null
          data_desligamento: string | null
          data_nascimento: string | null
          email: string | null
          endereco: string | null
          estado: string | null
          filiacao: string | null
          foto_veiculo: string | null
          id: string
          indicacao_cod: string | null
          indicacao_nome: string | null
          modelo: string | null
          motivo_suspensao: string | null
          nome: string | null
          nome_emergencia: string | null
          nome_social: string | null
          numero: string | null
          pix: string | null
          placa: string | null
          sexo: string | null
          status: Database["public"]["Enums"]["limper_status"] | null
          tec_id: string | null
          telefone: string | null
          tipo_chave: string | null
          tipo_veiculo: string | null
          user_id: string | null
        }
        Insert: {
          aceite_termo?: boolean | null
          agencia?: string | null
          aprovado_por?: string | null
          bairro?: string | null
          banco?: string | null
          cep?: string | null
          cidade?: string | null
          conta?: string | null
          contato_emergencia?: string | null
          cpf?: string | null
          data_aprovacao?: string | null
          data_cadastro?: string | null
          data_desligamento?: string | null
          data_nascimento?: string | null
          email?: string | null
          endereco?: string | null
          estado?: string | null
          filiacao?: string | null
          foto_veiculo?: string | null
          id?: string
          indicacao_cod?: string | null
          indicacao_nome?: string | null
          modelo?: string | null
          motivo_suspensao?: string | null
          nome?: string | null
          nome_emergencia?: string | null
          nome_social?: string | null
          numero?: string | null
          pix?: string | null
          placa?: string | null
          sexo?: string | null
          status?: Database["public"]["Enums"]["limper_status"] | null
          tec_id?: string | null
          telefone?: string | null
          tipo_chave?: string | null
          tipo_veiculo?: string | null
          user_id?: string | null
        }
        Update: {
          aceite_termo?: boolean | null
          agencia?: string | null
          aprovado_por?: string | null
          bairro?: string | null
          banco?: string | null
          cep?: string | null
          cidade?: string | null
          conta?: string | null
          contato_emergencia?: string | null
          cpf?: string | null
          data_aprovacao?: string | null
          data_cadastro?: string | null
          data_desligamento?: string | null
          data_nascimento?: string | null
          email?: string | null
          endereco?: string | null
          estado?: string | null
          filiacao?: string | null
          foto_veiculo?: string | null
          id?: string
          indicacao_cod?: string | null
          indicacao_nome?: string | null
          modelo?: string | null
          motivo_suspensao?: string | null
          nome?: string | null
          nome_emergencia?: string | null
          nome_social?: string | null
          numero?: string | null
          pix?: string | null
          placa?: string | null
          sexo?: string | null
          status?: Database["public"]["Enums"]["limper_status"] | null
          tec_id?: string | null
          telefone?: string | null
          tipo_chave?: string | null
          tipo_veiculo?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bd_limper_aprovado_por_fkey"
            columns: ["aprovado_por"]
            isOneToOne: false
            referencedRelation: "bd_adm_perfis"
            referencedColumns: ["id"]
          },
        ]
      }
      bd_limper_convites: {
        Row: {
          created_at: string | null
          created_by: string | null
          email: string
          expires_at: string
          id: string
          limper_id: string
          status: string | null
          token: string
          used_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          email: string
          expires_at?: string
          id?: string
          limper_id: string
          status?: string | null
          token?: string
          used_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          email?: string
          expires_at?: string
          id?: string
          limper_id?: string
          status?: string | null
          token?: string
          used_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bd_limper_convites_limper_id_fkey"
            columns: ["limper_id"]
            isOneToOne: false
            referencedRelation: "bd_limper"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bd_limper_convites_limper_id_fkey"
            columns: ["limper_id"]
            isOneToOne: false
            referencedRelation: "bd_limper_cadastro_ord"
            referencedColumns: ["id"]
          },
        ]
      }
      bd_limper_id: {
        Row: {
          access_count: number
          created_at: string
          created_by: string | null
          deleted_at: string | null
          deleted_by: string | null
          display_id: string | null
          filename: string
          hidden_at: string | null
          id: string
          last_accessed_at: string | null
          mime_type: string | null
          size_bytes: number | null
          storage_path: string
        }
        Insert: {
          access_count?: number
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          deleted_by?: string | null
          display_id?: string | null
          filename: string
          hidden_at?: string | null
          id?: string
          last_accessed_at?: string | null
          mime_type?: string | null
          size_bytes?: number | null
          storage_path: string
        }
        Update: {
          access_count?: number
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          deleted_by?: string | null
          display_id?: string | null
          filename?: string
          hidden_at?: string | null
          id?: string
          last_accessed_at?: string | null
          mime_type?: string | null
          size_bytes?: number | null
          storage_path?: string
        }
        Relationships: []
      }
      bd_limper_inbox: {
        Row: {
          arquivada: boolean
          corpo: string | null
          created_at: string
          icone: string | null
          id: string
          imagem_url: string | null
          lida: boolean
          lida_em: string | null
          limper_id: string
          link: string | null
          notificacao_id: string | null
          prioridade: string
          tipo: string
          titulo: string
        }
        Insert: {
          arquivada?: boolean
          corpo?: string | null
          created_at?: string
          icone?: string | null
          id?: string
          imagem_url?: string | null
          lida?: boolean
          lida_em?: string | null
          limper_id: string
          link?: string | null
          notificacao_id?: string | null
          prioridade?: string
          tipo?: string
          titulo: string
        }
        Update: {
          arquivada?: boolean
          corpo?: string | null
          created_at?: string
          icone?: string | null
          id?: string
          imagem_url?: string | null
          lida?: boolean
          lida_em?: string | null
          limper_id?: string
          link?: string | null
          notificacao_id?: string | null
          prioridade?: string
          tipo?: string
          titulo?: string
        }
        Relationships: [
          {
            foreignKeyName: "bd_limper_inbox_limper_id_fkey"
            columns: ["limper_id"]
            isOneToOne: false
            referencedRelation: "bd_limper"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bd_limper_inbox_limper_id_fkey"
            columns: ["limper_id"]
            isOneToOne: false
            referencedRelation: "bd_limper_cadastro_ord"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bd_limper_inbox_notificacao_id_fkey"
            columns: ["notificacao_id"]
            isOneToOne: false
            referencedRelation: "bd_push_notificacoes"
            referencedColumns: ["id"]
          },
        ]
      }
      bd_limper_localizacao: {
        Row: {
          accuracy: number | null
          altitude: number | null
          bateria_percent: number | null
          created_at: string | null
          heading: number | null
          id: string
          latitude: number
          limper_id: string
          longitude: number
          speed: number | null
          status: string | null
        }
        Insert: {
          accuracy?: number | null
          altitude?: number | null
          bateria_percent?: number | null
          created_at?: string | null
          heading?: number | null
          id?: string
          latitude: number
          limper_id: string
          longitude: number
          speed?: number | null
          status?: string | null
        }
        Update: {
          accuracy?: number | null
          altitude?: number | null
          bateria_percent?: number | null
          created_at?: string | null
          heading?: number | null
          id?: string
          latitude?: number
          limper_id?: string
          longitude?: number
          speed?: number | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bd_limper_localizacao_limper_id_fkey"
            columns: ["limper_id"]
            isOneToOne: false
            referencedRelation: "bd_limper"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bd_limper_localizacao_limper_id_fkey"
            columns: ["limper_id"]
            isOneToOne: false
            referencedRelation: "bd_limper_cadastro_ord"
            referencedColumns: ["id"]
          },
        ]
      }
      bd_limper_notificacoes: {
        Row: {
          corpo: string | null
          created_at: string | null
          dados: Json | null
          destinatario_id: string
          enviado_em: string | null
          erro: string | null
          id: string
          lido_em: string | null
          status: string | null
          tentativas: number | null
          tipo: string
          titulo: string
        }
        Insert: {
          corpo?: string | null
          created_at?: string | null
          dados?: Json | null
          destinatario_id: string
          enviado_em?: string | null
          erro?: string | null
          id?: string
          lido_em?: string | null
          status?: string | null
          tentativas?: number | null
          tipo: string
          titulo: string
        }
        Update: {
          corpo?: string | null
          created_at?: string | null
          dados?: Json | null
          destinatario_id?: string
          enviado_em?: string | null
          erro?: string | null
          id?: string
          lido_em?: string | null
          status?: string | null
          tentativas?: number | null
          tipo?: string
          titulo?: string
        }
        Relationships: []
      }
      bd_limper_servico_eventos: {
        Row: {
          accuracy: number | null
          created_at: string | null
          device_info: Json | null
          evento: string
          id: string
          latitude: number | null
          limper_id: string
          longitude: number | null
          observacao: string | null
          offline: boolean | null
          servico_id: string
          timestamp_local: string
          timestamp_servidor: string | null
        }
        Insert: {
          accuracy?: number | null
          created_at?: string | null
          device_info?: Json | null
          evento: string
          id?: string
          latitude?: number | null
          limper_id: string
          longitude?: number | null
          observacao?: string | null
          offline?: boolean | null
          servico_id: string
          timestamp_local: string
          timestamp_servidor?: string | null
        }
        Update: {
          accuracy?: number | null
          created_at?: string | null
          device_info?: Json | null
          evento?: string
          id?: string
          latitude?: number | null
          limper_id?: string
          longitude?: number | null
          observacao?: string | null
          offline?: boolean | null
          servico_id?: string
          timestamp_local?: string
          timestamp_servidor?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bd_servico_eventos_limper_id_fkey"
            columns: ["limper_id"]
            isOneToOne: false
            referencedRelation: "bd_limper"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bd_servico_eventos_limper_id_fkey"
            columns: ["limper_id"]
            isOneToOne: false
            referencedRelation: "bd_limper_cadastro_ord"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bd_servico_eventos_servico_id_fkey"
            columns: ["servico_id"]
            isOneToOne: false
            referencedRelation: "bd_limper_servicos"
            referencedColumns: ["id"]
          },
        ]
      }
      bd_limper_servico_fotos: {
        Row: {
          arquivo_path: string
          arquivo_url: string
          created_at: string | null
          descricao: string | null
          id: string
          latitude: number | null
          limper_id: string
          longitude: number | null
          offline: boolean | null
          ordem: number | null
          servico_id: string
          timestamp_local: string
          tipo: string
        }
        Insert: {
          arquivo_path: string
          arquivo_url: string
          created_at?: string | null
          descricao?: string | null
          id?: string
          latitude?: number | null
          limper_id: string
          longitude?: number | null
          offline?: boolean | null
          ordem?: number | null
          servico_id: string
          timestamp_local: string
          tipo: string
        }
        Update: {
          arquivo_path?: string
          arquivo_url?: string
          created_at?: string | null
          descricao?: string | null
          id?: string
          latitude?: number | null
          limper_id?: string
          longitude?: number | null
          offline?: boolean | null
          ordem?: number | null
          servico_id?: string
          timestamp_local?: string
          tipo?: string
        }
        Relationships: [
          {
            foreignKeyName: "bd_servico_fotos_limper_id_fkey"
            columns: ["limper_id"]
            isOneToOne: false
            referencedRelation: "bd_limper"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bd_servico_fotos_limper_id_fkey"
            columns: ["limper_id"]
            isOneToOne: false
            referencedRelation: "bd_limper_cadastro_ord"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bd_servico_fotos_servico_id_fkey"
            columns: ["servico_id"]
            isOneToOne: false
            referencedRelation: "bd_limper_servicos"
            referencedColumns: ["id"]
          },
        ]
      }
      bd_limper_servico_pontuacao: {
        Row: {
          created_at: string | null
          diferenca_minutos: number | null
          duracao_estimada_min: number | null
          duracao_real_min: number | null
          fotos_entrada_count: number | null
          fotos_saida_count: number | null
          hora_agendada: string
          hora_chegada: string | null
          hora_fim: string | null
          hora_inicio: string | null
          id: string
          limper_id: string
          pontos_documentacao: number | null
          pontos_eficiencia: number | null
          pontos_pontualidade: number | null
          pontos_total: number | null
          servico_id: string
        }
        Insert: {
          created_at?: string | null
          diferenca_minutos?: number | null
          duracao_estimada_min?: number | null
          duracao_real_min?: number | null
          fotos_entrada_count?: number | null
          fotos_saida_count?: number | null
          hora_agendada: string
          hora_chegada?: string | null
          hora_fim?: string | null
          hora_inicio?: string | null
          id?: string
          limper_id: string
          pontos_documentacao?: number | null
          pontos_eficiencia?: number | null
          pontos_pontualidade?: number | null
          pontos_total?: number | null
          servico_id: string
        }
        Update: {
          created_at?: string | null
          diferenca_minutos?: number | null
          duracao_estimada_min?: number | null
          duracao_real_min?: number | null
          fotos_entrada_count?: number | null
          fotos_saida_count?: number | null
          hora_agendada?: string
          hora_chegada?: string | null
          hora_fim?: string | null
          hora_inicio?: string | null
          id?: string
          limper_id?: string
          pontos_documentacao?: number | null
          pontos_eficiencia?: number | null
          pontos_pontualidade?: number | null
          pontos_total?: number | null
          servico_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bd_servico_pontuacao_limper_id_fkey"
            columns: ["limper_id"]
            isOneToOne: false
            referencedRelation: "bd_limper"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bd_servico_pontuacao_limper_id_fkey"
            columns: ["limper_id"]
            isOneToOne: false
            referencedRelation: "bd_limper_cadastro_ord"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bd_servico_pontuacao_servico_id_fkey"
            columns: ["servico_id"]
            isOneToOne: true
            referencedRelation: "bd_limper_servicos"
            referencedColumns: ["id"]
          },
        ]
      }
      bd_limper_servicos: {
        Row: {
          cliente_id: number | null
          codigo: string | null
          created_at: string | null
          data_agendada: string
          duracao_estimada_min: number | null
          endereco_completo: string | null
          endereco_id: string | null
          hora_agendada: string
          id: string
          instrucoes: string | null
          latitude: number | null
          limper_id: string | null
          longitude: number | null
          observacoes: string | null
          status: string | null
          updated_at: string | null
          valor_servico: number | null
          valor_tecnico: number | null
        }
        Insert: {
          cliente_id?: number | null
          codigo?: string | null
          created_at?: string | null
          data_agendada: string
          duracao_estimada_min?: number | null
          endereco_completo?: string | null
          endereco_id?: string | null
          hora_agendada: string
          id?: string
          instrucoes?: string | null
          latitude?: number | null
          limper_id?: string | null
          longitude?: number | null
          observacoes?: string | null
          status?: string | null
          updated_at?: string | null
          valor_servico?: number | null
          valor_tecnico?: number | null
        }
        Update: {
          cliente_id?: number | null
          codigo?: string | null
          created_at?: string | null
          data_agendada?: string
          duracao_estimada_min?: number | null
          endereco_completo?: string | null
          endereco_id?: string | null
          hora_agendada?: string
          id?: string
          instrucoes?: string | null
          latitude?: number | null
          limper_id?: string | null
          longitude?: number | null
          observacoes?: string | null
          status?: string | null
          updated_at?: string | null
          valor_servico?: number | null
          valor_tecnico?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "bd_servicos_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "bd_cliente"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bd_servicos_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "bd_cliente_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bd_servicos_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "vw_dashboard_clientes_assinaturas"
            referencedColumns: ["cliente_id"]
          },
          {
            foreignKeyName: "bd_servicos_endereco_id_fkey"
            columns: ["endereco_id"]
            isOneToOne: false
            referencedRelation: "bd_cliente_endereco"
            referencedColumns: ["uuid"]
          },
          {
            foreignKeyName: "bd_servicos_limper_id_fkey"
            columns: ["limper_id"]
            isOneToOne: false
            referencedRelation: "bd_limper"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bd_servicos_limper_id_fkey"
            columns: ["limper_id"]
            isOneToOne: false
            referencedRelation: "bd_limper_cadastro_ord"
            referencedColumns: ["id"]
          },
        ]
      }
      bd_limper_sync_queue: {
        Row: {
          created_at: string | null
          criado_local_em: string
          enviado_em: string | null
          erro: string | null
          id: string
          limper_id: string
          payload: Json
          status: string | null
          tentativas: number | null
          tipo: string
        }
        Insert: {
          created_at?: string | null
          criado_local_em: string
          enviado_em?: string | null
          erro?: string | null
          id?: string
          limper_id: string
          payload: Json
          status?: string | null
          tentativas?: number | null
          tipo: string
        }
        Update: {
          created_at?: string | null
          criado_local_em?: string
          enviado_em?: string | null
          erro?: string | null
          id?: string
          limper_id?: string
          payload?: Json
          status?: string | null
          tentativas?: number | null
          tipo?: string
        }
        Relationships: [
          {
            foreignKeyName: "bd_sync_queue_limper_id_fkey"
            columns: ["limper_id"]
            isOneToOne: false
            referencedRelation: "bd_limper"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bd_sync_queue_limper_id_fkey"
            columns: ["limper_id"]
            isOneToOne: false
            referencedRelation: "bd_limper_cadastro_ord"
            referencedColumns: ["id"]
          },
        ]
      }
      bd_log_interno: {
        Row: {
          action: string
          actor_id: string | null
          created_at: string | null
          details: Json | null
          id: string
          ip_address: string | null
          target_resource: string | null
        }
        Insert: {
          action: string
          actor_id?: string | null
          created_at?: string | null
          details?: Json | null
          id?: string
          ip_address?: string | null
          target_resource?: string | null
        }
        Update: {
          action?: string
          actor_id?: string | null
          created_at?: string | null
          details?: Json | null
          id?: string
          ip_address?: string | null
          target_resource?: string | null
        }
        Relationships: []
      }
      bd_lovable_logs: {
        Row: {
          cycle: number | null
          email: string | null
          id: string
          multiplier: number | null
          status: string | null
          timestamp: string | null
        }
        Insert: {
          cycle?: number | null
          email?: string | null
          id?: string
          multiplier?: number | null
          status?: string | null
          timestamp?: string | null
        }
        Update: {
          cycle?: number | null
          email?: string | null
          id?: string
          multiplier?: number | null
          status?: string | null
          timestamp?: string | null
        }
        Relationships: []
      }
      bd_lovable_status: {
        Row: {
          email: string
          last_cycle: number | null
          total_credits_gained: number | null
          updated_at: string | null
        }
        Insert: {
          email: string
          last_cycle?: number | null
          total_credits_gained?: number | null
          updated_at?: string | null
        }
        Update: {
          email?: string
          last_cycle?: number | null
          total_credits_gained?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      bd_lpmaster_cms: {
        Row: {
          blocks: Json
          created_at: string
          globals: Json
          id: string
          slug: string
          status: string
          theme: Json
          title: string
          updated_at: string
        }
        Insert: {
          blocks?: Json
          created_at?: string
          globals?: Json
          id?: string
          slug: string
          status: string
          theme?: Json
          title: string
          updated_at?: string
        }
        Update: {
          blocks?: Json
          created_at?: string
          globals?: Json
          id?: string
          slug?: string
          status?: string
          theme?: Json
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      bd_notice_campanha: {
        Row: {
          ativo: boolean | null
          created_at: string | null
          delay_entre_msgs: number | null
          delay_segundos: number | null
          descricao: string | null
          dias_semana: number[] | null
          filtros_json: Json | null
          horario_inicio: string | null
          id: string
          limite_teste: number | null
          modo: string | null
          nome: string
          publico_alvo: string | null
          sessao_id: string | null
          telefone_teste: string | null
          template_id: string | null
          tipo: string | null
          ultima_execucao: string | null
          updated_at: string | null
          wa_session_name: string | null
        }
        Insert: {
          ativo?: boolean | null
          created_at?: string | null
          delay_entre_msgs?: number | null
          delay_segundos?: number | null
          descricao?: string | null
          dias_semana?: number[] | null
          filtros_json?: Json | null
          horario_inicio?: string | null
          id?: string
          limite_teste?: number | null
          modo?: string | null
          nome: string
          publico_alvo?: string | null
          sessao_id?: string | null
          telefone_teste?: string | null
          template_id?: string | null
          tipo?: string | null
          ultima_execucao?: string | null
          updated_at?: string | null
          wa_session_name?: string | null
        }
        Update: {
          ativo?: boolean | null
          created_at?: string | null
          delay_entre_msgs?: number | null
          delay_segundos?: number | null
          descricao?: string | null
          dias_semana?: number[] | null
          filtros_json?: Json | null
          horario_inicio?: string | null
          id?: string
          limite_teste?: number | null
          modo?: string | null
          nome?: string
          publico_alvo?: string | null
          sessao_id?: string | null
          telefone_teste?: string | null
          template_id?: string | null
          tipo?: string | null
          ultima_execucao?: string | null
          updated_at?: string | null
          wa_session_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bd_notice_campanha_sessao_id_fkey"
            columns: ["sessao_id"]
            isOneToOne: false
            referencedRelation: "bd_notice_wa_sessao"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bd_notice_campanha_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "bd_notice_campanhasprontas"
            referencedColumns: ["id"]
          },
        ]
      }
      bd_notice_campanhasprontas: {
        Row: {
          categoria: string | null
          created_at: string | null
          created_by: string | null
          id: string
          is_active: boolean | null
          mensagem_corpo: string
          midia_url: string | null
          nome: string
          variaveis_esperadas: Json | null
        }
        Insert: {
          categoria?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          is_active?: boolean | null
          mensagem_corpo: string
          midia_url?: string | null
          nome: string
          variaveis_esperadas?: Json | null
        }
        Update: {
          categoria?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          is_active?: boolean | null
          mensagem_corpo?: string
          midia_url?: string | null
          nome?: string
          variaveis_esperadas?: Json | null
        }
        Relationships: []
      }
      bd_notice_fila_envio: {
        Row: {
          campanha_id: string | null
          created_at: string | null
          delay_segundos: number | null
          destinatario_id: number | null
          destinatario_nome: string | null
          entregue_em: string | null
          enviado_em: string | null
          erro_detalhe: string | null
          id: string
          lido_em: string | null
          log_id: string | null
          mensagem_final: string
          status: string | null
          telefone_destino: string
          telefone_original: string | null
          wa_check_at: string | null
          wa_check_existe: boolean | null
          wa_session_name: string | null
          waha_message_id: string | null
        }
        Insert: {
          campanha_id?: string | null
          created_at?: string | null
          delay_segundos?: number | null
          destinatario_id?: number | null
          destinatario_nome?: string | null
          entregue_em?: string | null
          enviado_em?: string | null
          erro_detalhe?: string | null
          id?: string
          lido_em?: string | null
          log_id?: string | null
          mensagem_final: string
          status?: string | null
          telefone_destino: string
          telefone_original?: string | null
          wa_check_at?: string | null
          wa_check_existe?: boolean | null
          wa_session_name?: string | null
          waha_message_id?: string | null
        }
        Update: {
          campanha_id?: string | null
          created_at?: string | null
          delay_segundos?: number | null
          destinatario_id?: number | null
          destinatario_nome?: string | null
          entregue_em?: string | null
          enviado_em?: string | null
          erro_detalhe?: string | null
          id?: string
          lido_em?: string | null
          log_id?: string | null
          mensagem_final?: string
          status?: string | null
          telefone_destino?: string
          telefone_original?: string | null
          wa_check_at?: string | null
          wa_check_existe?: boolean | null
          wa_session_name?: string | null
          waha_message_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bd_notice_fila_envio_campanha_id_fkey"
            columns: ["campanha_id"]
            isOneToOne: false
            referencedRelation: "bd_notice_campanha"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bd_notice_fila_envio_log_id_fkey"
            columns: ["log_id"]
            isOneToOne: false
            referencedRelation: "bd_notice_log"
            referencedColumns: ["id"]
          },
        ]
      }
      bd_notice_log: {
        Row: {
          campanha_id: string | null
          delay_used: number | null
          finalizado_em: string | null
          id: string
          iniciado_em: string | null
          modo_execucao: string | null
          status_execucao: string | null
          total_destinatarios: number | null
          total_falha: number | null
          total_sucesso: number | null
          triggered_by: string | null
          wa_session_used: string | null
        }
        Insert: {
          campanha_id?: string | null
          delay_used?: number | null
          finalizado_em?: string | null
          id?: string
          iniciado_em?: string | null
          modo_execucao?: string | null
          status_execucao?: string | null
          total_destinatarios?: number | null
          total_falha?: number | null
          total_sucesso?: number | null
          triggered_by?: string | null
          wa_session_used?: string | null
        }
        Update: {
          campanha_id?: string | null
          delay_used?: number | null
          finalizado_em?: string | null
          id?: string
          iniciado_em?: string | null
          modo_execucao?: string | null
          status_execucao?: string | null
          total_destinatarios?: number | null
          total_falha?: number | null
          total_sucesso?: number | null
          triggered_by?: string | null
          wa_session_used?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bd_notice_log_campanha_id_fkey"
            columns: ["campanha_id"]
            isOneToOne: false
            referencedRelation: "bd_notice_campanha"
            referencedColumns: ["id"]
          },
        ]
      }
      bd_notice_wa_sessao: {
        Row: {
          display_name: string | null
          id: string
          is_default: boolean | null
          metadata: Json | null
          session_name: string
          status_conexao: string | null
          updated_at: string | null
        }
        Insert: {
          display_name?: string | null
          id?: string
          is_default?: boolean | null
          metadata?: Json | null
          session_name: string
          status_conexao?: string | null
          updated_at?: string | null
        }
        Update: {
          display_name?: string | null
          id?: string
          is_default?: boolean | null
          metadata?: Json | null
          session_name?: string
          status_conexao?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      bd_notif_push_cliente_campanhas: {
        Row: {
          ativo: boolean | null
          created_at: string | null
          created_by: string | null
          descricao: string | null
          filtros_json: Json | null
          id: string
          limite_teste: number | null
          modo: string | null
          nome: string
          publico_alvo: string | null
          template_id: string | null
          tipo: string | null
          ultima_execucao: string | null
          updated_at: string | null
        }
        Insert: {
          ativo?: boolean | null
          created_at?: string | null
          created_by?: string | null
          descricao?: string | null
          filtros_json?: Json | null
          id?: string
          limite_teste?: number | null
          modo?: string | null
          nome: string
          publico_alvo?: string | null
          template_id?: string | null
          tipo?: string | null
          ultima_execucao?: string | null
          updated_at?: string | null
        }
        Update: {
          ativo?: boolean | null
          created_at?: string | null
          created_by?: string | null
          descricao?: string | null
          filtros_json?: Json | null
          id?: string
          limite_teste?: number | null
          modo?: string | null
          nome?: string
          publico_alvo?: string | null
          template_id?: string | null
          tipo?: string | null
          ultima_execucao?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      bd_notif_push_cliente_fila: {
        Row: {
          campanha_id: string | null
          cliente_id: number
          cliente_nome: string | null
          corpo: string
          created_at: string | null
          entregue_em: string | null
          enviado_em: string | null
          erro_detalhe: string | null
          fcm_message_id: string | null
          historico_id: string | null
          id: string
          imagem_url: string | null
          link: string | null
          status: string | null
          titulo: string
          token_usado: string | null
        }
        Insert: {
          campanha_id?: string | null
          cliente_id: number
          cliente_nome?: string | null
          corpo: string
          created_at?: string | null
          entregue_em?: string | null
          enviado_em?: string | null
          erro_detalhe?: string | null
          fcm_message_id?: string | null
          historico_id?: string | null
          id?: string
          imagem_url?: string | null
          link?: string | null
          status?: string | null
          titulo: string
          token_usado?: string | null
        }
        Update: {
          campanha_id?: string | null
          cliente_id?: number
          cliente_nome?: string | null
          corpo?: string
          created_at?: string | null
          entregue_em?: string | null
          enviado_em?: string | null
          erro_detalhe?: string | null
          fcm_message_id?: string | null
          historico_id?: string | null
          id?: string
          imagem_url?: string | null
          link?: string | null
          status?: string | null
          titulo?: string
          token_usado?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bd_notif_push_cliente_fila_campanha_id_fkey"
            columns: ["campanha_id"]
            isOneToOne: false
            referencedRelation: "bd_notif_push_cliente_campanhas"
            referencedColumns: ["id"]
          },
        ]
      }
      bd_notif_push_cliente_templates: {
        Row: {
          categoria: string | null
          corpo: string
          created_at: string | null
          created_by: string | null
          id: string
          imagem_url_padrao: string | null
          is_active: boolean | null
          link_padrao: string | null
          nome: string
          titulo: string
          variaveis_esperadas: Json | null
        }
        Insert: {
          categoria?: string | null
          corpo: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          imagem_url_padrao?: string | null
          is_active?: boolean | null
          link_padrao?: string | null
          nome: string
          titulo: string
          variaveis_esperadas?: Json | null
        }
        Update: {
          categoria?: string | null
          corpo?: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          imagem_url_padrao?: string | null
          is_active?: boolean | null
          link_padrao?: string | null
          nome?: string
          titulo?: string
          variaveis_esperadas?: Json | null
        }
        Relationships: []
      }
      bd_notif_push_limper_campanhas: {
        Row: {
          ativo: boolean | null
          created_at: string | null
          created_by: string | null
          descricao: string | null
          filtros_json: Json | null
          id: string
          limite_teste: number | null
          modo: string | null
          nome: string
          publico_alvo: string | null
          template_id: string | null
          tipo: string | null
          ultima_execucao: string | null
          updated_at: string | null
        }
        Insert: {
          ativo?: boolean | null
          created_at?: string | null
          created_by?: string | null
          descricao?: string | null
          filtros_json?: Json | null
          id?: string
          limite_teste?: number | null
          modo?: string | null
          nome: string
          publico_alvo?: string | null
          template_id?: string | null
          tipo?: string | null
          ultima_execucao?: string | null
          updated_at?: string | null
        }
        Update: {
          ativo?: boolean | null
          created_at?: string | null
          created_by?: string | null
          descricao?: string | null
          filtros_json?: Json | null
          id?: string
          limite_teste?: number | null
          modo?: string | null
          nome?: string
          publico_alvo?: string | null
          template_id?: string | null
          tipo?: string | null
          ultima_execucao?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      bd_notif_push_limper_fila: {
        Row: {
          campanha_id: string | null
          corpo: string
          created_at: string | null
          entregue_em: string | null
          enviado_em: string | null
          erro_detalhe: string | null
          fcm_message_id: string | null
          historico_id: string | null
          id: string
          imagem_url: string | null
          lido_em: string | null
          limper_id: string
          limper_nome: string | null
          link: string | null
          status: string | null
          titulo: string
          token_usado: string | null
        }
        Insert: {
          campanha_id?: string | null
          corpo: string
          created_at?: string | null
          entregue_em?: string | null
          enviado_em?: string | null
          erro_detalhe?: string | null
          fcm_message_id?: string | null
          historico_id?: string | null
          id?: string
          imagem_url?: string | null
          lido_em?: string | null
          limper_id: string
          limper_nome?: string | null
          link?: string | null
          status?: string | null
          titulo: string
          token_usado?: string | null
        }
        Update: {
          campanha_id?: string | null
          corpo?: string
          created_at?: string | null
          entregue_em?: string | null
          enviado_em?: string | null
          erro_detalhe?: string | null
          fcm_message_id?: string | null
          historico_id?: string | null
          id?: string
          imagem_url?: string | null
          lido_em?: string | null
          limper_id?: string
          limper_nome?: string | null
          link?: string | null
          status?: string | null
          titulo?: string
          token_usado?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bd_notif_push_limper_fila_campanha_id_fkey"
            columns: ["campanha_id"]
            isOneToOne: false
            referencedRelation: "bd_notif_push_limper_campanhas"
            referencedColumns: ["id"]
          },
        ]
      }
      bd_notif_push_limper_templates: {
        Row: {
          categoria: string | null
          corpo: string
          created_at: string | null
          created_by: string | null
          id: string
          imagem_url_padrao: string | null
          is_active: boolean | null
          link_padrao: string | null
          nome: string
          titulo: string
          variaveis_esperadas: Json | null
        }
        Insert: {
          categoria?: string | null
          corpo: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          imagem_url_padrao?: string | null
          is_active?: boolean | null
          link_padrao?: string | null
          nome: string
          titulo: string
          variaveis_esperadas?: Json | null
        }
        Update: {
          categoria?: string | null
          corpo?: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          imagem_url_padrao?: string | null
          is_active?: boolean | null
          link_padrao?: string | null
          nome?: string
          titulo?: string
          variaveis_esperadas?: Json | null
        }
        Relationships: []
      }
      bd_notif_whatsapp_limper_campanhas: {
        Row: {
          ativo: boolean | null
          created_at: string | null
          created_by: string | null
          delay_segundos: number | null
          descricao: string | null
          filtros_json: Json | null
          id: string
          limite_teste: number | null
          modo: string | null
          nome: string
          publico_alvo: string | null
          telefone_teste: string | null
          template_id: string | null
          tipo: string | null
          ultima_execucao: string | null
          updated_at: string | null
          wa_session_name: string | null
        }
        Insert: {
          ativo?: boolean | null
          created_at?: string | null
          created_by?: string | null
          delay_segundos?: number | null
          descricao?: string | null
          filtros_json?: Json | null
          id?: string
          limite_teste?: number | null
          modo?: string | null
          nome: string
          publico_alvo?: string | null
          telefone_teste?: string | null
          template_id?: string | null
          tipo?: string | null
          ultima_execucao?: string | null
          updated_at?: string | null
          wa_session_name?: string | null
        }
        Update: {
          ativo?: boolean | null
          created_at?: string | null
          created_by?: string | null
          delay_segundos?: number | null
          descricao?: string | null
          filtros_json?: Json | null
          id?: string
          limite_teste?: number | null
          modo?: string | null
          nome?: string
          publico_alvo?: string | null
          telefone_teste?: string | null
          template_id?: string | null
          tipo?: string | null
          ultima_execucao?: string | null
          updated_at?: string | null
          wa_session_name?: string | null
        }
        Relationships: []
      }
      bd_notif_whatsapp_limper_fila: {
        Row: {
          campanha_id: string | null
          created_at: string | null
          delay_segundos: number | null
          entregue_em: string | null
          enviado_em: string | null
          erro_detalhe: string | null
          id: string
          lido_em: string | null
          limper_id: string
          limper_nome: string | null
          log_id: string | null
          mensagem_final: string
          status: string | null
          telefone_destino: string
          telefone_original: string | null
          wa_check_at: string | null
          wa_check_existe: boolean | null
          wa_session_name: string | null
          waha_message_id: string | null
        }
        Insert: {
          campanha_id?: string | null
          created_at?: string | null
          delay_segundos?: number | null
          entregue_em?: string | null
          enviado_em?: string | null
          erro_detalhe?: string | null
          id?: string
          lido_em?: string | null
          limper_id: string
          limper_nome?: string | null
          log_id?: string | null
          mensagem_final: string
          status?: string | null
          telefone_destino: string
          telefone_original?: string | null
          wa_check_at?: string | null
          wa_check_existe?: boolean | null
          wa_session_name?: string | null
          waha_message_id?: string | null
        }
        Update: {
          campanha_id?: string | null
          created_at?: string | null
          delay_segundos?: number | null
          entregue_em?: string | null
          enviado_em?: string | null
          erro_detalhe?: string | null
          id?: string
          lido_em?: string | null
          limper_id?: string
          limper_nome?: string | null
          log_id?: string | null
          mensagem_final?: string
          status?: string | null
          telefone_destino?: string
          telefone_original?: string | null
          wa_check_at?: string | null
          wa_check_existe?: boolean | null
          wa_session_name?: string | null
          waha_message_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bd_notif_whatsapp_limper_fila_campanha_id_fkey"
            columns: ["campanha_id"]
            isOneToOne: false
            referencedRelation: "bd_notif_whatsapp_limper_campanhas"
            referencedColumns: ["id"]
          },
        ]
      }
      bd_notif_whatsapp_limper_templates: {
        Row: {
          categoria: string | null
          created_at: string | null
          created_by: string | null
          id: string
          is_active: boolean | null
          mensagem_corpo: string
          midia_url: string | null
          nome: string
          variaveis_esperadas: Json | null
        }
        Insert: {
          categoria?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          is_active?: boolean | null
          mensagem_corpo: string
          midia_url?: string | null
          nome: string
          variaveis_esperadas?: Json | null
        }
        Update: {
          categoria?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          is_active?: boolean | null
          mensagem_corpo?: string
          midia_url?: string | null
          nome?: string
          variaveis_esperadas?: Json | null
        }
        Relationships: []
      }
      bd_pipeline_status: {
        Row: {
          contacted_at: string | null
          contacted_by: string | null
          created_at: string
          customer_email: string
          id: string
          notes: string | null
          resolved_at: string | null
          status: string
          updated_at: string
        }
        Insert: {
          contacted_at?: string | null
          contacted_by?: string | null
          created_at?: string
          customer_email: string
          id?: string
          notes?: string | null
          resolved_at?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          contacted_at?: string | null
          contacted_by?: string | null
          created_at?: string
          customer_email?: string
          id?: string
          notes?: string | null
          resolved_at?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      bd_placa: {
        Row: {
          ano: string | null
          ativo: boolean | null
          atualizado_em: string | null
          carrotipo: string | null
          cor: string | null
          cpf_cnpj: string | null
          created_at: string | null
          fipe: string | null
          id: number | null
          marca: string | null
          modelo: string | null
          nome: string | null
          ordem: number | null
          origem: string | null
          placa: string | null
          referencia: string | null
          updated_at: string | null
          uuid: string
          vaga: string | null
        }
        Insert: {
          ano?: string | null
          ativo?: boolean | null
          atualizado_em?: string | null
          carrotipo?: string | null
          cor?: string | null
          cpf_cnpj?: string | null
          created_at?: string | null
          fipe?: string | null
          id?: number | null
          marca?: string | null
          modelo?: string | null
          nome?: string | null
          ordem?: number | null
          origem?: string | null
          placa?: string | null
          referencia?: string | null
          updated_at?: string | null
          uuid?: string
          vaga?: string | null
        }
        Update: {
          ano?: string | null
          ativo?: boolean | null
          atualizado_em?: string | null
          carrotipo?: string | null
          cor?: string | null
          cpf_cnpj?: string | null
          created_at?: string | null
          fipe?: string | null
          id?: number | null
          marca?: string | null
          modelo?: string | null
          nome?: string | null
          ordem?: number | null
          origem?: string | null
          placa?: string | null
          referencia?: string | null
          updated_at?: string | null
          uuid?: string
          vaga?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_cliente_placa"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "bd_cliente"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_cliente_placa"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "bd_cliente_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_cliente_placa"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "vw_dashboard_clientes_assinaturas"
            referencedColumns: ["cliente_id"]
          },
        ]
      }
      bd_presenca_log: {
        Row: {
          created_at: string | null
          event_type: string
          id: string
          ip_address: string | null
          page: string | null
          user_id: string
          user_name: string | null
        }
        Insert: {
          created_at?: string | null
          event_type: string
          id?: string
          ip_address?: string | null
          page?: string | null
          user_id: string
          user_name?: string | null
        }
        Update: {
          created_at?: string | null
          event_type?: string
          id?: string
          ip_address?: string | null
          page?: string | null
          user_id?: string
          user_name?: string | null
        }
        Relationships: []
      }
      bd_push_notificacoes: {
        Row: {
          corpo: string | null
          created_at: string
          dados: Json | null
          destinatarios: Json | null
          enviado_por: string | null
          erro_detalhes: Json | null
          id: string
          link: string | null
          status: string
          tipo: string
          titulo: string
          tokens_erro: number
          tokens_sucesso: number
          tokens_total: number
        }
        Insert: {
          corpo?: string | null
          created_at?: string
          dados?: Json | null
          destinatarios?: Json | null
          enviado_por?: string | null
          erro_detalhes?: Json | null
          id?: string
          link?: string | null
          status?: string
          tipo?: string
          titulo: string
          tokens_erro?: number
          tokens_sucesso?: number
          tokens_total?: number
        }
        Update: {
          corpo?: string | null
          created_at?: string
          dados?: Json | null
          destinatarios?: Json | null
          enviado_por?: string | null
          erro_detalhes?: Json | null
          id?: string
          link?: string | null
          status?: string
          tipo?: string
          titulo?: string
          tokens_erro?: number
          tokens_sucesso?: number
          tokens_total?: number
        }
        Relationships: []
      }
      bd_push_tokens: {
        Row: {
          ativo: boolean
          created_at: string
          deleted_at: string | null
          device_info: Json | null
          id: string
          limper_id: string | null
          platform: string | null
          token: string
          updated_at: string
          user_id: string | null
          user_type: string
        }
        Insert: {
          ativo?: boolean
          created_at?: string
          deleted_at?: string | null
          device_info?: Json | null
          id?: string
          limper_id?: string | null
          platform?: string | null
          token: string
          updated_at?: string
          user_id?: string | null
          user_type?: string
        }
        Update: {
          ativo?: boolean
          created_at?: string
          deleted_at?: string | null
          device_info?: Json | null
          id?: string
          limper_id?: string | null
          platform?: string | null
          token?: string
          updated_at?: string
          user_id?: string | null
          user_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "bd_push_tokens_limper_id_fkey"
            columns: ["limper_id"]
            isOneToOne: false
            referencedRelation: "bd_limper"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bd_push_tokens_limper_id_fkey"
            columns: ["limper_id"]
            isOneToOne: false
            referencedRelation: "bd_limper_cadastro_ord"
            referencedColumns: ["id"]
          },
        ]
      }
      bd_push_tokens_audit: {
        Row: {
          action: string
          created_at: string
          device_info: Json | null
          id: string
          ip_address: string | null
          limper_id: string | null
          new_values: Json | null
          old_values: Json | null
          token_id: string
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string
          device_info?: Json | null
          id?: string
          ip_address?: string | null
          limper_id?: string | null
          new_values?: Json | null
          old_values?: Json | null
          token_id: string
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          device_info?: Json | null
          id?: string
          ip_address?: string | null
          limper_id?: string | null
          new_values?: Json | null
          old_values?: Json | null
          token_id?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      bd_rate_limit: {
        Row: {
          blocked_until: string | null
          created_at: string
          id: string
          identifier: string
          identifier_type: string
          last_request_at: string
          metadata: Json | null
          request_count: number
          window_start: string
        }
        Insert: {
          blocked_until?: string | null
          created_at?: string
          id?: string
          identifier: string
          identifier_type?: string
          last_request_at?: string
          metadata?: Json | null
          request_count?: number
          window_start?: string
        }
        Update: {
          blocked_until?: string | null
          created_at?: string
          id?: string
          identifier?: string
          identifier_type?: string
          last_request_at?: string
          metadata?: Json | null
          request_count?: number
          window_start?: string
        }
        Relationships: []
      }
      bd_rate_limit_audit: {
        Row: {
          action: string
          created_at: string
          endpoint: string | null
          id: string
          identifier: string
          identifier_type: string
          limit_threshold: number | null
          metadata: Json | null
          request_count: number | null
          window_seconds: number | null
        }
        Insert: {
          action: string
          created_at?: string
          endpoint?: string | null
          id?: string
          identifier: string
          identifier_type: string
          limit_threshold?: number | null
          metadata?: Json | null
          request_count?: number | null
          window_seconds?: number | null
        }
        Update: {
          action?: string
          created_at?: string
          endpoint?: string | null
          id?: string
          identifier?: string
          identifier_type?: string
          limit_threshold?: number | null
          metadata?: Json | null
          request_count?: number | null
          window_seconds?: number | null
        }
        Relationships: []
      }
      bd_redirects: {
        Row: {
          click_count: number
          coupon_code: string | null
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          owner_id: string | null
          slug: string
          target_url: string
          updated_at: string | null
          utm_campaign: string | null
          utm_content: string | null
          utm_medium: string | null
          utm_source: string | null
          utm_term: string | null
        }
        Insert: {
          click_count?: number
          coupon_code?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          owner_id?: string | null
          slug: string
          target_url: string
          updated_at?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
        }
        Update: {
          click_count?: number
          coupon_code?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          owner_id?: string | null
          slug?: string
          target_url?: string
          updated_at?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
        }
        Relationships: []
      }
      bd_rotas_blindadas: {
        Row: {
          created_at: string
          description: string | null
          enabled: boolean
          id: string
          prefix: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          enabled?: boolean
          id?: string
          prefix: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          enabled?: boolean
          id?: string
          prefix?: string
          updated_at?: string
        }
        Relationships: []
      }
      bd_server_metrics: {
        Row: {
          collected_at: string
          cpu_usage: number | null
          disk_total_gb: number | null
          disk_usage: number | null
          disk_used_gb: number | null
          id: string
          ip_address: string | null
          network_in_mb: number | null
          network_out_mb: number | null
          ram_total_mb: number | null
          ram_usage: number | null
          ram_used_mb: number | null
          raw_data: Json | null
          server_id: string | null
          server_name: string
          status: string | null
        }
        Insert: {
          collected_at?: string
          cpu_usage?: number | null
          disk_total_gb?: number | null
          disk_usage?: number | null
          disk_used_gb?: number | null
          id?: string
          ip_address?: string | null
          network_in_mb?: number | null
          network_out_mb?: number | null
          ram_total_mb?: number | null
          ram_usage?: number | null
          ram_used_mb?: number | null
          raw_data?: Json | null
          server_id?: string | null
          server_name: string
          status?: string | null
        }
        Update: {
          collected_at?: string
          cpu_usage?: number | null
          disk_total_gb?: number | null
          disk_usage?: number | null
          disk_used_gb?: number | null
          id?: string
          ip_address?: string | null
          network_in_mb?: number | null
          network_out_mb?: number | null
          ram_total_mb?: number | null
          ram_usage?: number | null
          ram_used_mb?: number | null
          raw_data?: Json | null
          server_id?: string | null
          server_name?: string
          status?: string | null
        }
        Relationships: []
      }
      bd_server_monitor_events: {
        Row: {
          address: string | null
          created_at: string
          duration: number | null
          handshake_time: number | null
          heartbeat_time: string | null
          id: number
          important: boolean | null
          local_datetime: string | null
          monitor_name: string | null
          msg: string | null
          ping: number | null
          raw_data: Json | null
          response_time: number | null
          ssl_expiry_days: number | null
          status: string | null
          timezone: string | null
          upsidedown: boolean | null
        }
        Insert: {
          address?: string | null
          created_at?: string
          duration?: number | null
          handshake_time?: number | null
          heartbeat_time?: string | null
          id?: number
          important?: boolean | null
          local_datetime?: string | null
          monitor_name?: string | null
          msg?: string | null
          ping?: number | null
          raw_data?: Json | null
          response_time?: number | null
          ssl_expiry_days?: number | null
          status?: string | null
          timezone?: string | null
          upsidedown?: boolean | null
        }
        Update: {
          address?: string | null
          created_at?: string
          duration?: number | null
          handshake_time?: number | null
          heartbeat_time?: string | null
          id?: number
          important?: boolean | null
          local_datetime?: string | null
          monitor_name?: string | null
          msg?: string | null
          ping?: number | null
          raw_data?: Json | null
          response_time?: number | null
          ssl_expiry_days?: number | null
          status?: string | null
          timezone?: string | null
          upsidedown?: boolean | null
        }
        Relationships: []
      }
      bd_service_latency: {
        Row: {
          checked_at: string
          error_message: string | null
          id: string
          latency_ms: number | null
          service_name: string
          status: string
        }
        Insert: {
          checked_at?: string
          error_message?: string | null
          id?: string
          latency_ms?: number | null
          service_name: string
          status: string
        }
        Update: {
          checked_at?: string
          error_message?: string | null
          id?: string
          latency_ms?: number | null
          service_name?: string
          status?: string
        }
        Relationships: []
      }
      bd_webhook_queue: {
        Row: {
          attempts: number
          completed_at: string | null
          created_at: string
          event_id: string
          event_type: string
          id: string
          last_attempt_at: string | null
          last_error: string | null
          max_attempts: number
          next_attempt_at: string | null
          payload: Json
          status: string
          webhook_url: string
        }
        Insert: {
          attempts?: number
          completed_at?: string | null
          created_at?: string
          event_id: string
          event_type: string
          id?: string
          last_attempt_at?: string | null
          last_error?: string | null
          max_attempts?: number
          next_attempt_at?: string | null
          payload: Json
          status?: string
          webhook_url: string
        }
        Update: {
          attempts?: number
          completed_at?: string | null
          created_at?: string
          event_id?: string
          event_type?: string
          id?: string
          last_attempt_at?: string | null
          last_error?: string | null
          max_attempts?: number
          next_attempt_at?: string | null
          payload?: Json
          status?: string
          webhook_url?: string
        }
        Relationships: []
      }
      bd_whatsapp_messages: {
        Row: {
          created_at: string | null
          error_message: string | null
          id: string
          message_sent: string
          recipient_name: string | null
          recipient_phone: string
          recipient_type: string | null
          sent_at: string | null
          sent_by: string | null
          session_used: string
          status: string | null
          template_id: string | null
          waha_message_id: string | null
        }
        Insert: {
          created_at?: string | null
          error_message?: string | null
          id?: string
          message_sent: string
          recipient_name?: string | null
          recipient_phone: string
          recipient_type?: string | null
          sent_at?: string | null
          sent_by?: string | null
          session_used: string
          status?: string | null
          template_id?: string | null
          waha_message_id?: string | null
        }
        Update: {
          created_at?: string | null
          error_message?: string | null
          id?: string
          message_sent?: string
          recipient_name?: string | null
          recipient_phone?: string
          recipient_type?: string | null
          sent_at?: string | null
          sent_by?: string | null
          session_used?: string
          status?: string | null
          template_id?: string | null
          waha_message_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bd_whatsapp_messages_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "bd_whatsapp_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      bd_whatsapp_sessions_config: {
        Row: {
          app_name: string | null
          categories: string[] | null
          created_at: string | null
          device_name: string | null
          display_name: string | null
          id: string
          is_default: boolean | null
          is_hidden: boolean | null
          notes: string | null
          priority: number | null
          session_name: string
          updated_at: string | null
        }
        Insert: {
          app_name?: string | null
          categories?: string[] | null
          created_at?: string | null
          device_name?: string | null
          display_name?: string | null
          id?: string
          is_default?: boolean | null
          is_hidden?: boolean | null
          notes?: string | null
          priority?: number | null
          session_name: string
          updated_at?: string | null
        }
        Update: {
          app_name?: string | null
          categories?: string[] | null
          created_at?: string | null
          device_name?: string | null
          display_name?: string | null
          id?: string
          is_default?: boolean | null
          is_hidden?: boolean | null
          notes?: string | null
          priority?: number | null
          session_name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      bd_whatsapp_templates: {
        Row: {
          category: string
          created_at: string | null
          created_by: string | null
          delay_seconds: number | null
          id: string
          is_active: boolean | null
          message_body: string
          name: string
          session_preference: string | null
          updated_at: string | null
          variables: Json | null
        }
        Insert: {
          category: string
          created_at?: string | null
          created_by?: string | null
          delay_seconds?: number | null
          id?: string
          is_active?: boolean | null
          message_body: string
          name: string
          session_preference?: string | null
          updated_at?: string | null
          variables?: Json | null
        }
        Update: {
          category?: string
          created_at?: string | null
          created_by?: string | null
          delay_seconds?: number | null
          id?: string
          is_active?: boolean | null
          message_body?: string
          name?: string
          session_preference?: string | null
          updated_at?: string | null
          variables?: Json | null
        }
        Relationships: []
      }
      bd_workspace_menu: {
        Row: {
          criado_em: string
          icone: string
          id: string
          nome: string
          ordem: number
          url: string
        }
        Insert: {
          criado_em?: string
          icone: string
          id?: string
          nome: string
          ordem?: number
          url: string
        }
        Update: {
          criado_em?: string
          icone?: string
          id?: string
          nome?: string
          ordem?: number
          url?: string
        }
        Relationships: []
      }
    }
    Views: {
      bd_cliente_view: {
        Row: {
          bd_health: boolean | null
          cancel_set: string | null
          contato: string | null
          contrato: string | null
          cpf_cnpj: string | null
          cupom_aplicado: string | null
          cus: string | null
          dt_cadastro: string | null
          dt_nascimento: string | null
          e_mail: string | null
          enderecos_lista: Json | null
          id: number | null
          nome: string | null
          pause: boolean | null
          pause_in: string | null
          pause_out: string | null
          plano_atual: string | null
          receita_gerada: number | null
          receita_perdida: number | null
          status_master: string | null
          status_stripe: string | null
          sub: string | null
          valor_plano_base: number | null
          veiculos_lista: Json | null
          vencimento: string | null
        }
        Relationships: []
      }
      bd_limper_cadastro_ord: {
        Row: {
          aceite_termo: boolean | null
          agencia: string | null
          bairro: string | null
          banco: string | null
          cep: string | null
          cidade: string | null
          conta: string | null
          contato_emergencia: string | null
          cpf: string | null
          data_cadastro: string | null
          data_nascimento: string | null
          email: string | null
          endereco: string | null
          estado: string | null
          filiacao: string | null
          foto_veiculo: string | null
          id: string | null
          indicacao_cod: string | null
          indicacao_nome: string | null
          modelo: string | null
          nome: string | null
          nome_emergencia: string | null
          nome_social: string | null
          numero: string | null
          pix: string | null
          placa: string | null
          sexo: string | null
          tec_id: string | null
          telefone: string | null
          tipo_chave: string | null
          tipo_veiculo: string | null
        }
        Insert: {
          aceite_termo?: boolean | null
          agencia?: string | null
          bairro?: string | null
          banco?: string | null
          cep?: string | null
          cidade?: string | null
          conta?: string | null
          contato_emergencia?: string | null
          cpf?: string | null
          data_cadastro?: string | null
          data_nascimento?: string | null
          email?: string | null
          endereco?: string | null
          estado?: string | null
          filiacao?: string | null
          foto_veiculo?: string | null
          id?: string | null
          indicacao_cod?: string | null
          indicacao_nome?: string | null
          modelo?: string | null
          nome?: string | null
          nome_emergencia?: string | null
          nome_social?: string | null
          numero?: string | null
          pix?: string | null
          placa?: string | null
          sexo?: string | null
          tec_id?: string | null
          telefone?: string | null
          tipo_chave?: string | null
          tipo_veiculo?: string | null
        }
        Update: {
          aceite_termo?: boolean | null
          agencia?: string | null
          bairro?: string | null
          banco?: string | null
          cep?: string | null
          cidade?: string | null
          conta?: string | null
          contato_emergencia?: string | null
          cpf?: string | null
          data_cadastro?: string | null
          data_nascimento?: string | null
          email?: string | null
          endereco?: string | null
          estado?: string | null
          filiacao?: string | null
          foto_veiculo?: string | null
          id?: string | null
          indicacao_cod?: string | null
          indicacao_nome?: string | null
          modelo?: string | null
          nome?: string | null
          nome_emergencia?: string | null
          nome_social?: string | null
          numero?: string | null
          pix?: string | null
          placa?: string | null
          sexo?: string | null
          tec_id?: string | null
          telefone?: string | null
          tipo_chave?: string | null
          tipo_veiculo?: string | null
        }
        Relationships: []
      }
      vw_dashboard_clientes_assinaturas: {
        Row: {
          assinatura_created_at: string | null
          cliente_id: number | null
          cpf: string | null
          data_nascimento: string | null
          email: string | null
          id_stripe: string | null
          id_subs: string | null
          nome: string | null
          pause_collection: boolean | null
          status_original: string | null
          status_traduzido: string | null
        }
        Relationships: []
      }
      vw_limper_posicao_atual: {
        Row: {
          accuracy: number | null
          latitude: number | null
          limper_id: string | null
          longitude: number | null
          speed: number | null
          status: string | null
          ultima_atualizacao: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bd_limper_localizacao_limper_id_fkey"
            columns: ["limper_id"]
            isOneToOne: false
            referencedRelation: "bd_limper"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bd_limper_localizacao_limper_id_fkey"
            columns: ["limper_id"]
            isOneToOne: false
            referencedRelation: "bd_limper_cadastro_ord"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      activate_address: {
        Args: { p_id_cliente: number; p_uuid: string }
        Returns: Json
      }
      aggregate_health_daily: { Args: never; Returns: undefined }
      claim_invitation_role: { Args: { _token: string }; Returns: Json }
      claim_limper_invite: {
        Args: { _token: string; _user_id: string }
        Returns: Json
      }
      cleanup_expired_rate_limits: { Args: never; Returns: number }
      create_invitation: {
        Args: {
          _email: string
          _expires_days?: number
          _role: Database["public"]["Enums"]["app_role"]
        }
        Returns: Json
      }
      create_limper_invite: {
        Args: { _email: string; _limper_id: string }
        Returns: Json
      }
      deactivate_address: {
        Args: { p_id_cliente: number; p_uuid: string }
        Returns: Json
      }
      fn_reconcile_cliente_assinaturas_report: {
        Args: never
        Returns: {
          rows_changed: number
          step: string
        }[]
      }
      get_current_limper_id: { Args: never; Returns: string }
      get_dashboard_metrics: { Args: never; Returns: Json }
      get_limper_access_status: { Args: never; Returns: Json }
      get_team_members: {
        Args: never
        Returns: {
          created_at: string
          email: string
          friendly_id: string
          full_name: string
          id: string
          is_active: boolean
          job_title: string
          phone: string
          photo_url: string
          role: string
          start_date: string
        }[]
      }
      get_user_permissions: { Args: { _user_id: string }; Returns: string[] }
      get_user_roles: { Args: { user_id: string }; Returns: Json }
      has_any_role: { Args: { required_roles: string[] }; Returns: boolean }
      has_permission: {
        Args: { _permission: string; _user_id: string }
        Returns: boolean
      }
      has_privileged_role: { Args: { _user_id: string }; Returns: boolean }
      increment_limper_access: {
        Args: { p_filename: string }
        Returns: undefined
      }
      increment_redirect_count: {
        Args: { slug_text: string }
        Returns: undefined
      }
      jsonb_deep_merge: { Args: { base: Json; override: Json }; Returns: Json }
      limpar_e_converter_fipe: { Args: { valor_fipe: string }; Returns: number }
      normalize_address_priorities: {
        Args: { p_id_cliente: number }
        Returns: Json
      }
      replace_active_address: {
        Args: {
          p_id_cliente: number
          p_new_uuid: string
          p_replace_slot: string
        }
        Returns: Json
      }
      swap_active_address_priority: {
        Args: {
          p_id_cliente: number
          p_nova_prioridade: string
          p_uuid: string
        }
        Returns: Json
      }
      swap_address_priority: {
        Args: {
          p_id_cliente: number
          p_nova_prioridade: string
          p_uuid: string
        }
        Returns: Json
      }
      unaccent: { Args: { "": string }; Returns: string }
      validate_invitation: { Args: { _token: string }; Returns: Json }
      validate_limper_invite: { Args: { _token: string }; Returns: Json }
    }
    Enums: {
      app_role: "owner" | "master" | "senior" | "desenvolvedor" | "analista"
      limper_status: "pendente" | "ativo" | "inativo" | "suspenso"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["owner", "master", "senior", "desenvolvedor", "analista"],
      limper_status: ["pendente", "ativo", "inativo", "suspenso"],
    },
  },
} as const
