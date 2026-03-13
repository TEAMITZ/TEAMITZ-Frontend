import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 클래스명을 병합하는 유틸리티 함수
 * @param inputs - 병합할 클래스명들
 * @returns 병합된 클래스명 문자열
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
