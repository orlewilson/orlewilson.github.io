#!/usr/bin/env bash

set -euo pipefail

PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
COMPOSE=(docker compose --project-directory "$PROJECT_DIR" -f "$PROJECT_DIR/docker-compose.yml")

check_docker() {
  if ! command -v docker >/dev/null 2>&1; then
    printf 'Erro: instale o Docker e o plugin Docker Compose.\n' >&2
    return 1
  fi
  if ! docker compose version >/dev/null 2>&1; then
    printf 'Erro: o plugin Docker Compose não está disponível.\n' >&2
    return 1
  fi
  if ! docker info >/dev/null 2>&1; then
    printf 'Erro: inicie o Docker e verifique a permissão de acesso ao daemon.\n' >&2
    return 1
  fi
}

run_action() {
  check_docker || return 1

  case "$1" in
    1)
      "${COMPOSE[@]}" up -d --build astrowind || return $?
      printf '\nContainer iniciado. Acesse http://localhost:8080\n'
      ;;
    2) "${COMPOSE[@]}" build astrowind ;;
    3)
      "${COMPOSE[@]}" up -d --no-build astrowind || return $?
      printf '\nContainer iniciado. Acesse http://localhost:8080\n'
      ;;
    4) "${COMPOSE[@]}" stop astrowind ;;
    5) "${COMPOSE[@]}" ps -a ;;
    6) "${COMPOSE[@]}" logs --tail=100 astrowind ;;
  esac
}

while true; do
  printf '\n=== Build e container do projeto ===\n'
  printf '1) Fazer build e subir o container\n'
  printf '2) Apenas fazer build da imagem\n'
  printf '3) Subir o container com a imagem existente\n'
  printf '4) Parar o container\n'
  printf '5) Ver status\n'
  printf '6) Ver últimos logs\n'
  printf '0) Sair\n'

  if ! IFS= read -r -p 'Escolha uma opção: ' option; then
    printf '\n'
    break
  fi

  case "$option" in
    0) break ;;
    [1-6])
      if run_action "$option"; then
        printf '\nOperação concluída.\n'
      else
        printf '\nA operação falhou. Verifique as mensagens acima.\n' >&2
      fi
      ;;
    *) printf '\nOpção inválida. Escolha de 0 a 6.\n' ;;
  esac
done
