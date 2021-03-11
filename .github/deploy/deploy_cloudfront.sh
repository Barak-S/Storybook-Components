#!/bin/bash

source ../utilities/utilities.sh

deploy_cloudfront(){

  local -r environment="${1}"

  aws cloudformation deploy --template-file ../cloudformation/infrastructure/cloudfront_stack.json \
  --stack-name Cloudfront-${environment} \
  --parameter-overrides Environment="${environment}"

}

update_cognito_ssm(){

  local -r environment="${1}"
  local -r output="${2}"

  paramvalue=$(get_cf_outputs "Cloudfront-${environment}" "${output}")
  outputkey=$(echo "${output}" | awk '{print tolower($0)}')

  aws ssm put-parameter \
    --name "/${environment}/cognito/${outputkey}" \
    --type "String" \
    --value "${paramvalue}" \
    --overwrite

}

main(){

  # TODO still need to add environment parameter to the json
  deploy_cloudfront "qa"

}

main
