import { ProcessingType } from "@/db/models/enums";

export interface FieldDefinition {
  type: string;
  required?: boolean;
  description?: string;
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    enum?: string[];
  };
}

export interface TemplateDefinition {
  templateName: string;
  structure: Record<string, FieldDefinition>;
}

export interface EnhancedTemplateDefinition extends TemplateDefinition {
  processingType: ProcessingType;
  context?: string;
  priority?: string[];
}

export interface ExtractionResult {
  message: string;
  filledTemplate: Record<string, any>;
  confidence: number;
  missingFields: string[];
  warnings: string[];
}
