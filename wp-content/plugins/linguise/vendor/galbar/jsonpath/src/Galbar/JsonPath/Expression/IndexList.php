<?php
/**
 * Copyright 2021 Alessio Linares
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace Linguise\Vendor\JsonPath\Expression;

use Linguise\Vendor\JsonPath\Language;

class IndexList
{
    public static function evaluate(&$partial, $indexes, $createInexistent = false) {
        if (empty($partial)) {
            return array();
        }
        $partialSize = count($partial);
        $indexes = array_map(
            function($i) use ($partialSize) {
                if ($i < 0) {
                    $i = $i % $partialSize;
                    if ($i < 0) {
                        $i += $partialSize;
                    }
                }
                return $i;
            },
            $indexes
        );

        $indexes = array_filter(
            $indexes,
            function($x) use ($createInexistent, $partial) {
                return $createInexistent || array_key_exists($x, $partial);
            }
        );
        $result = array();
        foreach ($indexes as $i) {
            if (!array_key_exists($i, $partial)) {
                $partial[$i] = array();
            }
            $result[] = &$partial[$i];
        }
        return $result;
    }
}
