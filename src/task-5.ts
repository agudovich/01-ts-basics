function logStatus(status: 'loading' | 'success' | 'error'): void {
  if (status === 'loading') {
    console.log('Loading...');
  } else if (status === 'success') {
    console.log('Success!');
  } else if (status === 'error') {
    console.log('Something went wrong');
  }
}

console.log(`---------- TASK-5 ----------`);
logStatus('loading');
