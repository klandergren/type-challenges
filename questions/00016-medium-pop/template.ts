type Pop<T extends unknown[]> = T extends [...infer U, any] ? U : [];
