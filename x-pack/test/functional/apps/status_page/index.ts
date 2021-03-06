/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
import { TestInvoker } from './lib/types';

// tslint:disable:no-default-export
export default function statusPage({ loadTestFile }: TestInvoker) {
  describe('Status page', function statusPageTestSuite() {
    loadTestFile(require.resolve('./status_page'));
  });
}
