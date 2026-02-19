import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Formatar CPF: 000.000.000-00
export function formatCPF(value: string): string {
  const numbers = value.replace(/\D/g, '');
  if (numbers.length <= 11) {
    return numbers
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }
  return formatCNPJ(numbers);
}

// Formatar CNPJ: 00.000.000/0000-00
export function formatCNPJ(value: string): string {
  const numbers = value.replace(/\D/g, '');
  return numbers
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d{1,2})$/, '$1-$2');
}

// Formatar CPF ou CNPJ dinamicamente
export function formatCPFCNPJ(value: string): string {
  const numbers = value.replace(/\D/g, '');
  if (numbers.length <= 11) {
    return formatCPF(numbers);
  }
  return formatCNPJ(numbers);
}

// Formatar Telefone: (00) 00000-0000
export function formatPhone(value: string): string {
  const numbers = value.replace(/\D/g, '');
  return numbers
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
}

// Limpar formatação (remover tudo que não é número)
export function cleanNumbers(value: string): string {
  return value.replace(/\D/g, '');
}

// Formatar CEP: 00000-000
export function formatCEP(value: string | null): string {
  if (!value) return '';
  const numbers = value.replace(/\D/g, '');
  return numbers.replace(/(\d{5})(\d{1,3})/, '$1-$2');
}


// Calcular idade a partir da data de nascimento
export function calculateAge(birthDate: string | null): number | null {
  if (!birthDate) return null;
  try {
    const today = new Date();
    const birth = new Date(birthDate);
    if (isNaN(birth.getTime())) return null;
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  } catch {
    return null;
  }
}

// Formatar valor FIPE para moeda BR
export function formatFIPE(value: string | number | null): string {
  if (value === null || value === undefined) return '-';
  const num = typeof value === 'string' ? parseFloat(value.replace(/\D/g, '')) : value;
  if (isNaN(num)) return '-';
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(num);
}
