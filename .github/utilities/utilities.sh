#!/bin/bash

install_tools(){

  sudo npm install -g cognito-backup-restore

}

get_cf_outputs() {

  local stack_name="${1}"
  local output="${2}"

  echo $(aws cloudformation describe-stacks \
    --stack-name "${stack_name}" \
    --query "Stacks[0].Outputs[?OutputKey=='${output}'].OutputValue" \
    --output text)

}

export_cognito_users(){

  cbr backup

}

import_cognito_users(){

  cbr restore

}

#main(){

  #export_cognito_users
  #import_cognito_users
#}

#main
