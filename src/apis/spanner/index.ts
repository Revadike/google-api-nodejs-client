// Copyright 2018, Google, LLC.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*! THIS FILE IS AUTO-GENERATED */

import {getAPI, GoogleConfigurable} from '../../shared/src';
import {spanner_v1} from './v1';

export const VERSIONS = {
  'v1': spanner_v1.Spanner,
};

export function spanner(version: 'v1'): spanner_v1.Spanner;
export function spanner(options: spanner_v1.Options): spanner_v1.Spanner;
export function spanner<T = spanner_v1.Spanner>(
    this: GoogleConfigurable, versionOrOptions: 'v1'|spanner_v1.Options) {
  return getAPI<T>('spanner', versionOrOptions, VERSIONS, this);
}
