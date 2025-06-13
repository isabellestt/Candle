import type { CallRecord } from '../types/conversation.type';
import { callData as defaultCallData } from '../../public/callData';

export const LOCAL_STORAGE_KEYS = {
  CALL_RECORDS: 'callRecords',
};

export function initializeLocalStorage() {
  const existingData = localStorage.getItem(LOCAL_STORAGE_KEYS.CALL_RECORDS);
  
  if (!existingData) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.CALL_RECORDS, JSON.stringify(defaultCallData));
    console.log('Initialized localStorage with default call data');
  }
}

export function addDeletedId(id: string) {
  try {
    let deletedIds = [];
    const storedIds = localStorage.getItem('deletedRecordIds');
    
    if (storedIds) {
      deletedIds = JSON.parse(storedIds);
    }
    
    if (!deletedIds.includes(id)) {
      deletedIds.push(id);
      localStorage.setItem('deletedRecordIds', JSON.stringify(deletedIds));
      console.log(`Added ID ${id} to deleted records list`);
    }
  } catch (error) {
    console.error('Error adding deleted ID:', error);
  }
}

export function getDeletedIds(): string[] {
  try {
    const storedIds = localStorage.getItem('deletedRecordIds');
    return storedIds ? JSON.parse(storedIds) : [];
  } catch (error) {
    console.error('Error getting deleted IDs:', error);
    return [];
  }
}

export function getStoredCallRecords(): CallRecord[] {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEYS.CALL_RECORDS);
    if (!data) return [];
    
    const records = JSON.parse(data);
    const deletedIds = getDeletedIds();

    return records.filter((record: CallRecord) => !deletedIds.includes(record.id));
  } catch (error) {
    console.error('Error retrieving call records from localStorage:', error);
    return [];
  }
}

export function storeCallRecords(records: CallRecord[]) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEYS.CALL_RECORDS, JSON.stringify(records));
  } catch (error) {
    console.error('Error storing call records to localStorage:', error);
  }
}