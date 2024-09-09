window.BENCHMARK_DATA = {
  "lastUpdate": 1725906371043,
  "repoUrl": "https://github.com/cocotb/cocotb",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "cocotb",
            "username": "cocotb"
          },
          "committer": {
            "name": "cocotb",
            "username": "cocotb"
          },
          "id": "7a41bc3e0fc60014a183a474a62e9fa9f902d614",
          "message": "CI: Use elevated permissions to push benchmark results",
          "timestamp": "2023-11-02T02:23:26Z",
          "url": "https://github.com/cocotb/cocotb/pull/3476/commits/7a41bc3e0fc60014a183a474a62e9fa9f902d614"
        },
        "date": 1698919119843,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13465609426012765,
            "unit": "iter/sec",
            "range": "stddev: 0.04582213319345109",
            "extra": "mean: 7.426325600000007 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "cocotb",
            "username": "cocotb"
          },
          "committer": {
            "name": "cocotb",
            "username": "cocotb"
          },
          "id": "5c2acf96ebc44b4b71975938528e634d7e038d87",
          "message": "CI: Use elevated permissions to push benchmark results",
          "timestamp": "2023-11-02T02:23:26Z",
          "url": "https://github.com/cocotb/cocotb/pull/3476/commits/5c2acf96ebc44b4b71975938528e634d7e038d87"
        },
        "date": 1698920008134,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07946932032709786,
            "unit": "iter/sec",
            "range": "stddev: 0.07951111060773151",
            "extra": "mean: 12.583472412799972 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "63ac9586640965780707863a272c42b2c724147d",
          "message": "CI: Use a stable GHDL version for performance benchmarks\n\nUse the latest stable version of GHDL for our performance benchmarks to\nget predictable outputs.",
          "timestamp": "2023-11-03T13:50:11+01:00",
          "tree_id": "11cd2e73122aca648bdf5cd7da7b81921079d74e",
          "url": "https://github.com/cocotb/cocotb/commit/63ac9586640965780707863a272c42b2c724147d"
        },
        "date": 1699016044695,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14084740500993126,
            "unit": "iter/sec",
            "range": "stddev: 0.011266289058841018",
            "extra": "mean: 7.0998823154000545 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "distinct": true,
          "id": "f13b124e86006c40b7f66ac29d9fc64ddbf57667",
          "message": "Fallback to type().__name__ when wrapped coroutine object has no __name__ attribute (such as a class derived from collections.abc.Coroutine)",
          "timestamp": "2023-11-03T12:16:03-07:00",
          "tree_id": "450222855cb048b28519b9eefe62a11cb6b02587",
          "url": "https://github.com/cocotb/cocotb/commit/f13b124e86006c40b7f66ac29d9fc64ddbf57667"
        },
        "date": 1699039142248,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18162893047628711,
            "unit": "iter/sec",
            "range": "stddev: 0.023689923595402222",
            "extra": "mean: 5.505730818200004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "0034d685d8378b59ff1e1f3d504b50b8da268efd",
          "message": "Make Trigger.prime and Trigger.unprime private methods",
          "timestamp": "2023-11-04T10:35:02-05:00",
          "tree_id": "d8329cb5931c582b8b4ffce9eba89fc22276fbc0",
          "url": "https://github.com/cocotb/cocotb/commit/0034d685d8378b59ff1e1f3d504b50b8da268efd"
        },
        "date": 1699112335443,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1356556926677954,
            "unit": "iter/sec",
            "range": "stddev: 0.04750975131391103",
            "extra": "mean: 7.371603655799987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "911031697b61763219bdea0d8d423cb787da0d49",
          "message": "CI: Only attempt to push the benchmark on master\n\nPR builds from a fork fail due to secrets not being available. These\nsecrets are not available by design, so let's avoid running the step\naltogether.\n\nError message:\n```\nRun actions/create-github-app-token@v1\n  with:\n    owner: cocotb\n    repositories: cocotb-benchmark-results\n  env:\n    pythonLocation: /opt/hostedtoolcache/Python/3.8.18/x64\n    PKG_CONFIG_PATH: /opt/hostedtoolcache/Python/3.8.18/x64/lib/pkgconfig\n    Python_ROOT_DIR: /opt/hostedtoolcache/Python/3.8.18/x64\n    Python2_ROOT_DIR: /opt/hostedtoolcache/Python/3.8.18/x64\n    Python3_ROOT_DIR: /opt/hostedtoolcache/Python/3.8.18/x64\n    LD_LIBRARY_PATH: /opt/hostedtoolcache/Python/3.8.18/x64/lib\n/home/runner/work/_actions/actions/create-github-app-token/v1/dist/main.cjs:10116\n  throw new Error(\"Input required and not supplied: app-id\");\n  ^\n\nError: Input required and not supplied: app-id\n    at Object.<anonymous> (/home/runner/work/_actions/actions/create-github-app-token/v1/dist/main.cjs:10116:9)\n    at Module._compile (node:internal/modules/cjs/loader:1241:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)\n    at Module.load (node:internal/modules/cjs/loader:1091:32)\n    at Module._load (node:internal/modules/cjs/loader:938:12)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)\n    at node:internal/main/run_main_module:23:47\n```",
          "timestamp": "2023-11-05T11:31:17+01:00",
          "tree_id": "fcd32b200f1029623ed2e63fe9cebd97c1f65c52",
          "url": "https://github.com/cocotb/cocotb/commit/911031697b61763219bdea0d8d423cb787da0d49"
        },
        "date": 1699180523779,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13439441446457598,
            "unit": "iter/sec",
            "range": "stddev: 0.036363386333450834",
            "extra": "mean: 7.440785422399995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "38434295fc9aeacbeb976a831514e5170ad32c18",
          "message": "Fix typing on cocotb.test",
          "timestamp": "2023-11-05T20:46:39-06:00",
          "tree_id": "d6f44309033d927f452aaa06e9cf501db26b7c6d",
          "url": "https://github.com/cocotb/cocotb/commit/38434295fc9aeacbeb976a831514e5170ad32c18"
        },
        "date": 1699239425379,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.11451758776460515,
            "unit": "iter/sec",
            "range": "stddev: 0.08524866935281233",
            "extra": "mean: 8.732283132400017 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "dc21559d478fc5c76470446328d28e9dc5d0f8e8",
          "message": "Improve error message\n\nCo-authored-by: Marlon James <marlon.james@gmail.com>",
          "timestamp": "2023-11-05T21:30:47-06:00",
          "tree_id": "768f956b0eb8da6d297ed3b7207d7771b3620005",
          "url": "https://github.com/cocotb/cocotb/commit/dc21559d478fc5c76470446328d28e9dc5d0f8e8"
        },
        "date": 1699241690990,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13282733464362814,
            "unit": "iter/sec",
            "range": "stddev: 0.09356396965537105",
            "extra": "mean: 7.528570852400003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "a4272cdf5fa6de48a25355b7b28305a49a13a090",
          "message": "Fix issues with documentation generation",
          "timestamp": "2023-11-06T07:05:52-06:00",
          "tree_id": "aac8131fb313fd38199d08c79835a970cce91e8a",
          "url": "https://github.com/cocotb/cocotb/commit/a4272cdf5fa6de48a25355b7b28305a49a13a090"
        },
        "date": 1699276229705,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1176716997813752,
            "unit": "iter/sec",
            "range": "stddev: 0.12723528215733432",
            "extra": "mean: 8.498220063600012 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "d9f8133367930fca3182a23d69740940517b4256",
          "message": "Move to src/ project infrastructure",
          "timestamp": "2023-11-06T08:21:30-06:00",
          "tree_id": "c5f841c5528b6d3c55e8233bdb19bb2fee749faf",
          "url": "https://github.com/cocotb/cocotb/commit/d9f8133367930fca3182a23d69740940517b4256"
        },
        "date": 1699280670464,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18232303989805998,
            "unit": "iter/sec",
            "range": "stddev: 0.018877945163629197",
            "extra": "mean: 5.484770331599987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cmarqu42@gmail.com",
            "name": "Colin Marquardt",
            "username": "cmarqu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d47ee4fd76ed004086144138615fe3485e5960e",
          "message": "Rename documentation/ to the more common docs/ (#3486)",
          "timestamp": "2023-11-06T18:54:43+01:00",
          "tree_id": "d114eeb99bba865a086225a39c3f74594bcf4aa8",
          "url": "https://github.com/cocotb/cocotb/commit/1d47ee4fd76ed004086144138615fe3485e5960e"
        },
        "date": 1699293473483,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1765411052889215,
            "unit": "iter/sec",
            "range": "stddev: 0.09136616855893866",
            "extra": "mean: 5.664403190199994 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e46334519276a87f1b61704f985a97632830e5b1",
          "message": "Use a consistent seed in tests/benchmark.py (#3489)",
          "timestamp": "2023-11-07T10:27:17+01:00",
          "tree_id": "5802a9b719d436dac723ca2e56f1c19f085d72be",
          "url": "https://github.com/cocotb/cocotb/commit/e46334519276a87f1b61704f985a97632830e5b1"
        },
        "date": 1699349416425,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.17924472922232343,
            "unit": "iter/sec",
            "range": "stddev: 0.05101358419336057",
            "extra": "mean: 5.578964605199997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "distinct": true,
          "id": "2294011c94bb19b48aabc74f229eee977c5e554e",
          "message": "Update scheduler to use f-strings",
          "timestamp": "2023-11-07T09:49:57-08:00",
          "tree_id": "a6eb305c800dd5bae189b0b50e1320fe04d2cb62",
          "url": "https://github.com/cocotb/cocotb/commit/2294011c94bb19b48aabc74f229eee977c5e554e"
        },
        "date": 1699379576832,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18364294825056834,
            "unit": "iter/sec",
            "range": "stddev: 0.04804460724635621",
            "extra": "mean: 5.445349301600015 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "3467ee5420bdef8a981bd6914bce30f258fe7131",
          "message": "Aldec: Pass VPI library to Verilog compile\n\nAldec suggests passing the VPI library to the Verilog compile step, as\nthe manual explains:\n\n---\nVerilog Compilation and PLI/VPI Applications\n\nPLI/VPI applications that contain functions returning values to the Verilog\nsource code must be visible not only to the simulator but to the Verilog compiler\nas well. If the type or the size of the value returned by a PLI/VPI function\nand used in Verilog code changes, you have to recompile the Verilog source files.\n\nThe visibility of PLI/VPI applications also allows the Verilog compiler to perform\nadditional syntax checks. For example, the compiler will be able to detect that a\nuser task defined in the PLI/VPI library is invoked in the Verilog source code\nas if it were a function. (The compiler will report an error in such situation.)\nIf the PLI/VPI library is not visible to the Verilog compiler, the compiler will\nonly be able to print a warning about using a non-standard system function.\n---\n\nPreviously, we passed a dummy library `libgpi`, which makes no real\nsense and is probably a leftover from a previous refactor? Remove that,\nand pass the real library instead consistently in the Makefile and in\nour runner.",
          "timestamp": "2023-11-07T19:31:12+01:00",
          "tree_id": "599a19f37a8c3a38f2f08948419db9a7180e19c5",
          "url": "https://github.com/cocotb/cocotb/commit/3467ee5420bdef8a981bd6914bce30f258fe7131"
        },
        "date": 1699382054004,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.17943266871934216,
            "unit": "iter/sec",
            "range": "stddev: 0.058755885328367834",
            "extra": "mean: 5.573121144200002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "distinct": true,
          "id": "a26bb7b3d2ede1ddca9521808e97cc5d52b44191",
          "message": "nox: Remove editable install of cocotb from create_env_for_docs_build()\n\nInstead, for each session, install normally from source unless\nan editable install is required.",
          "timestamp": "2023-11-07T12:51:19-08:00",
          "tree_id": "b34a6b9b259cc4e59a0e084cca9048bd261aa31a",
          "url": "https://github.com/cocotb/cocotb/commit/a26bb7b3d2ede1ddca9521808e97cc5d52b44191"
        },
        "date": 1699390462269,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.17884012663226603,
            "unit": "iter/sec",
            "range": "stddev: 0.04723057553615248",
            "extra": "mean: 5.591586288999986 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "8015f1d5dda6b2f11d189e986805e9de2825a950",
          "message": "CI: Use the latest icarus release\n\nv12 of Icarus Verilog went out in June. Update to this version, which is\nalso newer than the git commit we used in some places.",
          "timestamp": "2023-11-07T22:12:57+01:00",
          "tree_id": "bdae4f02840e3819ba87db0c00b010980dfcf897",
          "url": "https://github.com/cocotb/cocotb/commit/8015f1d5dda6b2f11d189e986805e9de2825a950"
        },
        "date": 1699391760420,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18824869411503428,
            "unit": "iter/sec",
            "range": "stddev: 0.06454867784974207",
            "extra": "mean: 5.312121843400007 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "ea2ba58325231218614a0c4ed95af5bd5cf96b45",
          "message": "Remove task.__iter__ as we don't support yield statements in coroutines anymore",
          "timestamp": "2023-11-07T17:14:12-06:00",
          "tree_id": "6eb23870f9107d7bc27037b556d4ac5c81e1db37",
          "url": "https://github.com/cocotb/cocotb/commit/ea2ba58325231218614a0c4ed95af5bd5cf96b45"
        },
        "date": 1699399033677,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18053186894039377,
            "unit": "iter/sec",
            "range": "stddev: 0.05510189683964468",
            "extra": "mean: 5.539188210199995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "667be403f11043eacc032df4f3cc3ad89a82c2fe",
          "message": "Riviera-PRO: Always exit the compilation step\n\nRiviera (\"vsimsa\") automatically switches to \"batch\" mode when output is\nredirected, and stays in interactive mode otherwise. In our Makefiles,\nwe always redirect the output and hence produce predictable behavior. In\nour runner, we don't redirect output. Depending on how tests get run,\nthe output then gets redirected, or not: in CI, output always gets\nredirected, hence the alog/acom commands terminate. In manual testing in\nan interactive terminal, that's not the case and the tests are stuck.\n\nProvide predictable behavior by always exiting at the end.",
          "timestamp": "2023-11-08T08:39:37+01:00",
          "tree_id": "65ade3a9576c51bbaad82d059d20b4041bc30459",
          "url": "https://github.com/cocotb/cocotb/commit/667be403f11043eacc032df4f3cc3ad89a82c2fe"
        },
        "date": 1699429364493,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.17973322674884593,
            "unit": "iter/sec",
            "range": "stddev: 0.03820738592728261",
            "extra": "mean: 5.563801518999997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "distinct": true,
          "id": "52171eed34f6508bab0ad422b2f676ddcd0716f0",
          "message": "Scheduler: remove context manager tracking _current_task\n\nWith fork() removed, the scheduler is no longer re-entrant,\nand no task should be scheduled while another is already running.\n\nThere is an added benefit of performance increase.\nIn testing, runtime reduction ranged from ~2% for matrix_multiplier,\nto ~15% on some workloads involving a very high number of task switches.",
          "timestamp": "2023-11-08T08:01:00-08:00",
          "tree_id": "ceb2b3dd6cc225807f0c9248c6564fb74d103ca1",
          "url": "https://github.com/cocotb/cocotb/commit/52171eed34f6508bab0ad422b2f676ddcd0716f0"
        },
        "date": 1699459605010,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09535068890584378,
            "unit": "iter/sec",
            "range": "stddev: 0.2564275597418212",
            "extra": "mean: 10.487601206400019 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cmarqu42@gmail.com",
            "name": "Colin Marquardt",
            "username": "cmarqu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "801a07c1b6c200f0f8612ef66fe18d05031cd3e6",
          "message": "Replace flake8, black and isort with ruff and ruff-format (#3499)\n\nReplace flake8, black and isort with ruff and ruff-format\r\n\r\nRun ruff-format on the cocotb code",
          "timestamp": "2023-11-09T19:55:06+01:00",
          "tree_id": "ec1e0509a2702400b8ac13c2ca58b32a0840b509",
          "url": "https://github.com/cocotb/cocotb/commit/801a07c1b6c200f0f8612ef66fe18d05031cd3e6"
        },
        "date": 1699556284401,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18933746745745877,
            "unit": "iter/sec",
            "range": "stddev: 0.046624162435926694",
            "extra": "mean: 5.28157481679998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "8e189cb675a7d543b0b8cf6a10884362b2595a9b",
          "message": "Use __name__ in lazy_property to get it to work correctly",
          "timestamp": "2023-11-10T13:15:35-06:00",
          "tree_id": "0aee4f6f4ad98c7b7da3e14dd3fb61f52ac7f519",
          "url": "https://github.com/cocotb/cocotb/commit/8e189cb675a7d543b0b8cf6a10884362b2595a9b"
        },
        "date": 1699643917107,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18896312206416435,
            "unit": "iter/sec",
            "range": "stddev: 0.05073418073793825",
            "extra": "mean: 5.292037880600003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cmarqu42@gmail.com",
            "name": "Colin Marquardt",
            "username": "cmarqu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32b8581c8434fbadf2ea6ce35cd97e44b9fc9a45",
          "message": "Fix watching code changes for doc live preview (#3511)\n\nRequired since we now use the src/ layout.",
          "timestamp": "2023-11-14T23:33:30+01:00",
          "tree_id": "95c64f83408cd5204f20672bb05a708c38dcf520",
          "url": "https://github.com/cocotb/cocotb/commit/32b8581c8434fbadf2ea6ce35cd97e44b9fc9a45"
        },
        "date": 1700001389858,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18836020316626784,
            "unit": "iter/sec",
            "range": "stddev: 0.030901393112237704",
            "extra": "mean: 5.308977072600032 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nick@nickg.me.uk",
            "name": "Nick Gasson",
            "username": "nickg"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "3308a868ab2a4e73ce1dc4da72317c30e890e154",
          "message": "Fix passing generics from NVC makefile\n\nThis was reported in nickg/nvc#797. The -g option should be passed when\nelaborating rather than when running the simulation.\n\nTo avoid adding another argument variable I just split SIM_ARGS into\nthose that need to be passed to -e and those that need to be passed to\n-r.",
          "timestamp": "2023-11-19T21:38:04-06:00",
          "tree_id": "1da8453c9b8e298d89de715e7e2da1708e54f8c7",
          "url": "https://github.com/cocotb/cocotb/commit/3308a868ab2a4e73ce1dc4da72317c30e890e154"
        },
        "date": 1700451672241,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18997186662553658,
            "unit": "iter/sec",
            "range": "stddev: 0.04927823307675141",
            "extra": "mean: 5.263937328000003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nick@nickg.me.uk",
            "name": "Nick Gasson",
            "username": "nickg"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "15458a612ffc746debff838add761bc5675ae49f",
          "message": "Add NVC support to runner.py",
          "timestamp": "2023-11-20T10:26:28-06:00",
          "tree_id": "bc5eb03c3154e7446f64d34cc0b6440e7e39fbcd",
          "url": "https://github.com/cocotb/cocotb/commit/15458a612ffc746debff838add761bc5675ae49f"
        },
        "date": 1700497774882,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18595316303627496,
            "unit": "iter/sec",
            "range": "stddev: 0.039698402826970965",
            "extra": "mean: 5.377698253 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "3519c83d86ff9c12bffb16db16a6c1c55c8b791b",
          "message": "Fix RuntimeWarning of unwatched task in test_scheduler",
          "timestamp": "2023-11-20T10:35:54-06:00",
          "tree_id": "a7ebd10732cf54bfac899b7e4311c92b12b2ed6a",
          "url": "https://github.com/cocotb/cocotb/commit/3519c83d86ff9c12bffb16db16a6c1c55c8b791b"
        },
        "date": 1700498329183,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1907890201679155,
            "unit": "iter/sec",
            "range": "stddev: 0.032297030187647666",
            "extra": "mean: 5.241391769399985 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "b26f135b4b484f7d792e6799358be89e0b8c4141",
          "message": "Refactor coverage stop and save for cocotb internals",
          "timestamp": "2023-11-20T10:39:28-06:00",
          "tree_id": "8e8b11989f204420794b7af6b8ff2a8a0497b75d",
          "url": "https://github.com/cocotb/cocotb/commit/b26f135b4b484f7d792e6799358be89e0b8c4141"
        },
        "date": 1700498628225,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.20197497898186562,
            "unit": "iter/sec",
            "range": "stddev: 0.01593409391443916",
            "extra": "mean: 4.951108325600001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anolte512@gmail.com",
            "name": "Andrew Nolte",
            "username": "AndrewNolte"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "642d31237694e6112058ba053e25ae25b295e12a",
          "message": "add cocotb.parameterize() similar to nox.parameterize() (#3513)\n\nCo-authored-by: Andrew Nolte <anolte@hudson-trading.com>\r\nCo-authored-by: Kaleb Barrett <dev.ktbarrett@gmail.com>\r\nCo-authored-by: Colin Marquardt <cmarqu42@gmail.com>",
          "timestamp": "2023-11-22T16:29:43-06:00",
          "tree_id": "7fdea9614f05d9dd45b57281e10c049f7030a5d8",
          "url": "https://github.com/cocotb/cocotb/commit/642d31237694e6112058ba053e25ae25b295e12a"
        },
        "date": 1700692369260,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18477373859979487,
            "unit": "iter/sec",
            "range": "stddev: 0.051200564649915334",
            "extra": "mean: 5.412024498599988 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1b9ba0146dde44131cf8c59845fb23b010f5eb4",
          "message": "Fix docs (#3521)",
          "timestamp": "2023-11-22T17:16:42-06:00",
          "tree_id": "054e11f44fb52ac38c4e500049448e3022f4215e",
          "url": "https://github.com/cocotb/cocotb/commit/d1b9ba0146dde44131cf8c59845fb23b010f5eb4"
        },
        "date": 1700695202499,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18869494602695308,
            "unit": "iter/sec",
            "range": "stddev: 0.07263411266717139",
            "extra": "mean: 5.299559002800004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43395876733905367a28a2aa7e0db1fab2f136ad",
          "message": "Use NVC in benchmark instead of GHDL (#3528)\n\nGHDL can't run the matrix_multiplier, so there never was any sense in\r\nusing it in the benchmark.",
          "timestamp": "2023-11-24T11:07:05-06:00",
          "tree_id": "25dada088a683e7b90d1bdb3b04caaf14bae29d9",
          "url": "https://github.com/cocotb/cocotb/commit/43395876733905367a28a2aa7e0db1fab2f136ad"
        },
        "date": 1700845836672,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.19688917948161902,
            "unit": "iter/sec",
            "range": "stddev: 0.015398579376937461",
            "extra": "mean: 5.078999275800004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2716633606149369,
            "unit": "iter/sec",
            "range": "stddev: 0.012337952095967133",
            "extra": "mean: 3.6810263914000076 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18723d6660e04626094f4c4b6886591f69043ecf",
          "message": "Move pytest and coverage config to pyproject.toml (#3530)",
          "timestamp": "2023-11-24T11:16:11-06:00",
          "tree_id": "b6173d963c9f185d60f448873f2890716891819b",
          "url": "https://github.com/cocotb/cocotb/commit/18723d6660e04626094f4c4b6886591f69043ecf"
        },
        "date": 1700846344334,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1867787413946072,
            "unit": "iter/sec",
            "range": "stddev: 0.05336822243636688",
            "extra": "mean: 5.353928356799992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25020140855600753,
            "unit": "iter/sec",
            "range": "stddev: 0.03281335552503604",
            "extra": "mean: 3.9967800571999987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c35b608bb94d0589fc7267303f89a5d8aa65cad3",
          "message": "Improvements to test_discovery (#3527)\n\nMove everything into one file and make iteration test useful.",
          "timestamp": "2023-11-24T11:17:18-06:00",
          "tree_id": "6becc9c807ff4c0411d59433a773d9af0fd46fb8",
          "url": "https://github.com/cocotb/cocotb/commit/c35b608bb94d0589fc7267303f89a5d8aa65cad3"
        },
        "date": 1700846563382,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18642842367317913,
            "unit": "iter/sec",
            "range": "stddev: 0.055466481195223113",
            "extra": "mean: 5.363988925600012 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25904168218725737,
            "unit": "iter/sec",
            "range": "stddev: 0.01983393120197066",
            "extra": "mean: 3.8603825899999946 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wim.appermans@gmail.com",
            "name": "wimiko",
            "username": "wimiko"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a983f99ea883310216711d58a9a426157f4381cc",
          "message": "Close -makelib with -endlib (#3537)",
          "timestamp": "2023-11-27T13:27:22-06:00",
          "tree_id": "a3f492bb54fdae1f5f6d529cf356965b280bc9f1",
          "url": "https://github.com/cocotb/cocotb/commit/a983f99ea883310216711d58a9a426157f4381cc"
        },
        "date": 1701113418156,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1893571244885518,
            "unit": "iter/sec",
            "range": "stddev: 0.022428609260526408",
            "extra": "mean: 5.281026540200014 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2512741580607863,
            "unit": "iter/sec",
            "range": "stddev: 0.04702688887095782",
            "extra": "mean: 3.979716846800011 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "12e581c6691b59886f6c2b963ace6a5237e1ef70",
          "message": "remove MEMDEBUG (#3543)",
          "timestamp": "2023-11-29T08:24:57-06:00",
          "tree_id": "6a0541b2297e7bd0a1b9c66a52f8205feb52b088",
          "url": "https://github.com/cocotb/cocotb/commit/12e581c6691b59886f6c2b963ace6a5237e1ef70"
        },
        "date": 1701268096913,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1854424214890522,
            "unit": "iter/sec",
            "range": "stddev: 0.07331413697892672",
            "extra": "mean: 5.392509394400008 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24638708033068185,
            "unit": "iter/sec",
            "range": "stddev: 0.05257113771219861",
            "extra": "mean: 4.058654368800006 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "david.stanford@gmail.com",
            "name": "DLS",
            "username": "forensicgarlic"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b320625d14c17b67e46dcc943f5d154ee6c1ecec",
          "message": "Add  to GHDL makefile to simulate different VHDL architectures from the top level (#3541)\n\n\r\nCo-authored-by: David Stanford <david.stanford@twosigma.com>",
          "timestamp": "2023-11-29T08:36:43-06:00",
          "tree_id": "7d60e4613c73b6569209d27273833d5556c36b29",
          "url": "https://github.com/cocotb/cocotb/commit/b320625d14c17b67e46dcc943f5d154ee6c1ecec"
        },
        "date": 1701268775673,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18719870720944204,
            "unit": "iter/sec",
            "range": "stddev: 0.036294753428403194",
            "extra": "mean: 5.3419172328 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2493842194130734,
            "unit": "iter/sec",
            "range": "stddev: 0.01347210366333588",
            "extra": "mean: 4.009876817199995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "20e087a354f9f4a73ad1422b57ea06f24b0b7f30",
          "message": "manually fix remaining ruff issues",
          "timestamp": "2023-11-29T22:39:07-06:00",
          "tree_id": "0cb85bbcfb6f3d085627f9059e0973592493d03e",
          "url": "https://github.com/cocotb/cocotb/commit/20e087a354f9f4a73ad1422b57ea06f24b0b7f30"
        },
        "date": 1701319316605,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18705983635248352,
            "unit": "iter/sec",
            "range": "stddev: 0.029051885854991737",
            "extra": "mean: 5.345883004600006 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25013350971131554,
            "unit": "iter/sec",
            "range": "stddev: 0.01747342502766623",
            "extra": "mean: 3.997864984800003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b563fa0a8a5c962fa2b1bb70a9b958445a9dc6a5",
          "message": "Don't get definition name or file until necessary (#3542)",
          "timestamp": "2023-11-29T23:00:52-06:00",
          "tree_id": "3799f597b328f4a0c0ab9c043d538b185ab66cb6",
          "url": "https://github.com/cocotb/cocotb/commit/b563fa0a8a5c962fa2b1bb70a9b958445a9dc6a5"
        },
        "date": 1701320652323,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.2053670521324269,
            "unit": "iter/sec",
            "range": "stddev: 0.03861538147117118",
            "extra": "mean: 4.869330253399994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.27329415544973,
            "unit": "iter/sec",
            "range": "stddev: 0.033941969724575256",
            "extra": "mean: 3.659061052200002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d310febe74ee87b49e03828f6147cc3c26c4186d",
          "message": "Ignore the ruff formatting commit in git blame (#3545)",
          "timestamp": "2023-11-30T09:04:28-06:00",
          "tree_id": "ff9e9dbda228790a0359de7333ae1448a7577496",
          "url": "https://github.com/cocotb/cocotb/commit/d310febe74ee87b49e03828f6147cc3c26c4186d"
        },
        "date": 1701356847759,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18617710307854113,
            "unit": "iter/sec",
            "range": "stddev: 0.02103315910985886",
            "extra": "mean: 5.371229777799999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24619936917777394,
            "unit": "iter/sec",
            "range": "stddev: 0.07301339339235732",
            "extra": "mean: 4.061748831199997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f201c2a71abd3cf3e81c100cd637fe623745d33b",
          "message": "Replace lazy_property with cached_property (#3547)\n\nWe don't use lazy_property's implementation before Python 3.8 because\r\nsphinx doesn't detect them as valid properties and generate\r\ndocumentation for them.",
          "timestamp": "2023-12-01T11:09:24-06:00",
          "tree_id": "130a8291e8807760538bf8208afafb34b2c794ea",
          "url": "https://github.com/cocotb/cocotb/commit/f201c2a71abd3cf3e81c100cd637fe623745d33b"
        },
        "date": 1701450743554,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18557833775311808,
            "unit": "iter/sec",
            "range": "stddev: 0.02263379975576003",
            "extra": "mean: 5.388559958600007 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2507051663185177,
            "unit": "iter/sec",
            "range": "stddev: 0.03476174698841971",
            "extra": "mean: 3.988749073999986 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "b5012f945135469f89daed59107b768d55da5d04",
          "message": "Add newsfragments on changes",
          "timestamp": "2023-12-01T12:56:14-06:00",
          "tree_id": "4317c42b963cca8610701df78b059634f253d04f",
          "url": "https://github.com/cocotb/cocotb/commit/b5012f945135469f89daed59107b768d55da5d04"
        },
        "date": 1701457156886,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18614963800787565,
            "unit": "iter/sec",
            "range": "stddev: 0.023611438289622682",
            "extra": "mean: 5.37202226500001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25130490859113724,
            "unit": "iter/sec",
            "range": "stddev: 0.034666382996582576",
            "extra": "mean: 3.97922987500001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5eab5a0dc1b35497556c1bcc2c8c009feae805f",
          "message": "Remove BaseClock (#3550)",
          "timestamp": "2023-12-02T08:51:55-06:00",
          "tree_id": "f7551cf12ec878939e3eff5dac3fe90f0dffbb88",
          "url": "https://github.com/cocotb/cocotb/commit/b5eab5a0dc1b35497556c1bcc2c8c009feae805f"
        },
        "date": 1701528888737,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.19154651916551477,
            "unit": "iter/sec",
            "range": "stddev: 0.0379007424048564",
            "extra": "mean: 5.220663911599996 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2521801628858557,
            "unit": "iter/sec",
            "range": "stddev: 0.10516548358706702",
            "extra": "mean: 3.9654189629999963 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "ef230ff69921b82f589e0ac1ff32ed4416aff2e6",
          "message": "Bump conda-incubator/setup-miniconda from 2 to 3\n\nBumps [conda-incubator/setup-miniconda](https://github.com/conda-incubator/setup-miniconda) from 2 to 3.\n- [Release notes](https://github.com/conda-incubator/setup-miniconda/releases)\n- [Changelog](https://github.com/conda-incubator/setup-miniconda/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/conda-incubator/setup-miniconda/compare/v2...v3)\n\n---\nupdated-dependencies:\n- dependency-name: conda-incubator/setup-miniconda\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-12-04T09:01:42-06:00",
          "tree_id": "2f04cefc9a6772028ad30319bbb40e6785f69a12",
          "url": "https://github.com/cocotb/cocotb/commit/ef230ff69921b82f589e0ac1ff32ed4416aff2e6"
        },
        "date": 1701702280161,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1863616710153099,
            "unit": "iter/sec",
            "range": "stddev: 0.05050354195467082",
            "extra": "mean: 5.365910246199974 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24819452063717776,
            "unit": "iter/sec",
            "range": "stddev: 0.058015612334281895",
            "extra": "mean: 4.029097811799988 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nick@nickg.me.uk",
            "name": "Nick Gasson",
            "username": "nickg"
          },
          "committer": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "distinct": true,
          "id": "99955631f3c9990f070b032df20f4c52e98f655d",
          "message": "Update NVC expected results for test_discovery",
          "timestamp": "2023-12-04T11:28:47-08:00",
          "tree_id": "91ae3e4b16ecb8a519e46d3a946077ad6f0310d6",
          "url": "https://github.com/cocotb/cocotb/commit/99955631f3c9990f070b032df20f4c52e98f655d"
        },
        "date": 1701718300557,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.19236989498745605,
            "unit": "iter/sec",
            "range": "stddev: 0.01740497145382164",
            "extra": "mean: 5.198318583400004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25643694285605523,
            "unit": "iter/sec",
            "range": "stddev: 0.03324222747691729",
            "extra": "mean: 3.8995941414000015 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tstrader@hudson-trading.com",
            "name": "Todd Strader",
            "username": "toddstrader"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d379318ea2a8fcce140c07c80739e6af5b6bb66c",
          "message": "Verilog package access (#3536)\n\nAdd `cocotb.packages` to provide access to SystemVerilog packages in the design.",
          "timestamp": "2023-12-06T08:29:41-08:00",
          "tree_id": "a616dfab6082b2c87dda00dca48888fcae50fc95",
          "url": "https://github.com/cocotb/cocotb/commit/d379318ea2a8fcce140c07c80739e6af5b6bb66c"
        },
        "date": 1701880356434,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.19075376879133898,
            "unit": "iter/sec",
            "range": "stddev: 0.05035330133039925",
            "extra": "mean: 5.242360380800005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25106017504935263,
            "unit": "iter/sec",
            "range": "stddev: 0.047544317045649764",
            "extra": "mean: 3.9831088296000075 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tstrader@hudson-trading.com",
            "name": "Todd Strader",
            "username": "toddstrader"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f0525b957d5e01fc9eb8d58a5ca3f71ac3251e2",
          "message": "Fix defaultless parameters for Xcelium (#3558)",
          "timestamp": "2023-12-07T21:57:23-06:00",
          "tree_id": "8d9992d0a7e7d9adbf71b3ffc422538e6da60951",
          "url": "https://github.com/cocotb/cocotb/commit/0f0525b957d5e01fc9eb8d58a5ca3f71ac3251e2"
        },
        "date": 1702008015029,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18840514275291334,
            "unit": "iter/sec",
            "range": "stddev: 0.03665588006842833",
            "extra": "mean: 5.307710741799997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2515141504479805,
            "unit": "iter/sec",
            "range": "stddev: 0.03312413419324278",
            "extra": "mean: 3.975919439200004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "428be3647f854f9b7e9082cccd4194ec5e3396e5",
          "message": "Fix test_parallel_cocotb for NVC (#3559)",
          "timestamp": "2023-12-07T21:58:02-06:00",
          "tree_id": "5f55063c7c1471338ef2f3f582c25665e1fe6952",
          "url": "https://github.com/cocotb/cocotb/commit/428be3647f854f9b7e9082cccd4194ec5e3396e5"
        },
        "date": 1702008194451,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1531414799278416,
            "unit": "iter/sec",
            "range": "stddev: 0.07126475389153461",
            "extra": "mean: 6.529909469800003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.21029854379203536,
            "unit": "iter/sec",
            "range": "stddev: 0.023204954035458244",
            "extra": "mean: 4.75514467180002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "40a27c267ba42b49acd033b57aa44c3c5693e131",
          "message": "Fix broken newsfrags (#3564)",
          "timestamp": "2023-12-07T22:19:20-08:00",
          "tree_id": "b0a1bb11ce9fb7e89b49f83780076f108aec8084",
          "url": "https://github.com/cocotb/cocotb/commit/40a27c267ba42b49acd033b57aa44c3c5693e131"
        },
        "date": 1702016548317,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1880096365891441,
            "unit": "iter/sec",
            "range": "stddev: 0.04217601752198557",
            "extra": "mean: 5.318876298800001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25083183583704827,
            "unit": "iter/sec",
            "range": "stddev: 0.0381937100509257",
            "extra": "mean: 3.9867347645999986 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6c3aa512058ce50ddca2da0b165477527c3bef65",
          "message": "Remove Bit class (#3549)\n\nPreviously Bit was supposed to be a part of a grander plan to\r\nincorporate more HDL types, but that plan was abandoned and Bit is now\r\nuseless.\r\n\r\nAdditionally, Logic was expanded to cover the whole 9-value VHDL\r\nstd_logic type because SV's 4-value type is a strict subset and why not\r\nhave more features than less?",
          "timestamp": "2023-12-08T07:03:25-06:00",
          "tree_id": "422b17cbe686807ebae7735ddae9b20b38daa63b",
          "url": "https://github.com/cocotb/cocotb/commit/6c3aa512058ce50ddca2da0b165477527c3bef65"
        },
        "date": 1702040848396,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.19082207745975088,
            "unit": "iter/sec",
            "range": "stddev: 0.021653317871871046",
            "extra": "mean: 5.2404837705999965 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25361612413081674,
            "unit": "iter/sec",
            "range": "stddev: 0.03104530627449667",
            "extra": "mean: 3.9429669680000075 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "57e8d0df1af9e08a95c5c9e0c1cb8ad786931cd2",
          "message": "NVC: Fix remaining CI issues with Python runner",
          "timestamp": "2023-12-08T08:32:31-06:00",
          "tree_id": "215c45763fab48334614552b82d87f19bf05019c",
          "url": "https://github.com/cocotb/cocotb/commit/57e8d0df1af9e08a95c5c9e0c1cb8ad786931cd2"
        },
        "date": 1702046142856,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18894443451510465,
            "unit": "iter/sec",
            "range": "stddev: 0.053259413752533395",
            "extra": "mean: 5.292561289599973 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25330303714246133,
            "unit": "iter/sec",
            "range": "stddev: 0.047596760347099115",
            "extra": "mean: 3.947840544199971 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tstrader@hudson-trading.com",
            "name": "Todd Strader",
            "username": "toddstrader"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae389417ac089fa4f54eb3d9a7e8efe1bd48d0d7",
          "message": "Support customizing simulator output redirection (#3561)",
          "timestamp": "2023-12-08T10:41:02-06:00",
          "tree_id": "d02a1ce5cdd10fdb7b67c684cf1673ba1460b404",
          "url": "https://github.com/cocotb/cocotb/commit/ae389417ac089fa4f54eb3d9a7e8efe1bd48d0d7"
        },
        "date": 1702053840951,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.19043005877631594,
            "unit": "iter/sec",
            "range": "stddev: 0.013453012444860179",
            "extra": "mean: 5.251271812999994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25571713796658413,
            "unit": "iter/sec",
            "range": "stddev: 0.04226496250582977",
            "extra": "mean: 3.910570906400005 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aacf08bedff1dc59c2a5cc501b1744c7f9cb4587",
          "message": "Prevent Edge triggers from being applied to invalid handle types (#3563)",
          "timestamp": "2023-12-08T16:21:29-06:00",
          "tree_id": "820253bcac76dd54aecd45acf509be0b89b8a24a",
          "url": "https://github.com/cocotb/cocotb/commit/aacf08bedff1dc59c2a5cc501b1744c7f9cb4587"
        },
        "date": 1702074265458,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1907175305495742,
            "unit": "iter/sec",
            "range": "stddev: 0.044865852301388516",
            "extra": "mean: 5.243356481800004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.252686052957723,
            "unit": "iter/sec",
            "range": "stddev: 0.03292874183040091",
            "extra": "mean: 3.9574799966000116 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8650adc742556034f22dfb779613425ec94fadd",
          "message": "Disable MSVC test for now (#3570)",
          "timestamp": "2023-12-08T16:45:17-06:00",
          "tree_id": "8e8c746547611b4aebe98a3cdbd1d3fac78714ce",
          "url": "https://github.com/cocotb/cocotb/commit/a8650adc742556034f22dfb779613425ec94fadd"
        },
        "date": 1702075760494,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14849211519579245,
            "unit": "iter/sec",
            "range": "stddev: 0.043181479432165125",
            "extra": "mean: 6.734364303999996 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20311540646327897,
            "unit": "iter/sec",
            "range": "stddev: 0.028111526667105452",
            "extra": "mean: 4.923309449599969 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tstrader@hudson-trading.com",
            "name": "Todd Strader",
            "username": "toddstrader"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6635f6e373641ee79a9e99d2314e09046aa666c5",
          "message": "Fix test_package RTL location (#3567)",
          "timestamp": "2023-12-08T21:21:41-06:00",
          "tree_id": "0f46c3fd35df4efe6b992ec1a6285e6a694cccde",
          "url": "https://github.com/cocotb/cocotb/commit/6635f6e373641ee79a9e99d2314e09046aa666c5"
        },
        "date": 1702092347249,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14758382509383997,
            "unit": "iter/sec",
            "range": "stddev: 0.025402844164112925",
            "extra": "mean: 6.775810285200009 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20409479955831625,
            "unit": "iter/sec",
            "range": "stddev: 0.012440329719668663",
            "extra": "mean: 4.899683883000011 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69d9bf7cc628c5cfe07a3836d4c284b738c995af",
          "message": "Fix documentation issues (#3572)",
          "timestamp": "2023-12-09T09:17:02-06:00",
          "tree_id": "7dbedec212b2a73152662de997d9659b585580c5",
          "url": "https://github.com/cocotb/cocotb/commit/69d9bf7cc628c5cfe07a3836d4c284b738c995af"
        },
        "date": 1702135221018,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18900160920207518,
            "unit": "iter/sec",
            "range": "stddev: 0.025084103891099305",
            "extra": "mean: 5.290960242199992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2526101619707366,
            "unit": "iter/sec",
            "range": "stddev: 0.03720333556219658",
            "extra": "mean: 3.9586689316000045 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "todd.strader@gmail.com",
            "name": "Todd Strader",
            "username": "toddstrader"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8728fa72440d2ed8ca542d15ffd21f6362b54b14",
          "message": "Add git rev to local version identifier\n\nCo-authored-by: Marlon James <marlon.james@gmail.com>",
          "timestamp": "2023-12-10T18:33:15Z",
          "tree_id": "b9ce58e5368f411e0a0341debdf60d4e981b26de",
          "url": "https://github.com/cocotb/cocotb/commit/8728fa72440d2ed8ca542d15ffd21f6362b54b14"
        },
        "date": 1702233364662,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18858140964620584,
            "unit": "iter/sec",
            "range": "stddev: 0.02787403502564077",
            "extra": "mean: 5.302749628800006 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25125021560817457,
            "unit": "iter/sec",
            "range": "stddev: 0.031108029138662112",
            "extra": "mean: 3.9800960869999926 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a655e2e5113950cbdaf89a5333ca643ddeb11ba",
          "message": "Move user code coverage feature out of RegressionManager (#3571)",
          "timestamp": "2023-12-10T19:21:37-06:00",
          "tree_id": "6304e84df168ca93f62a3b30f9b60c62b596a130",
          "url": "https://github.com/cocotb/cocotb/commit/6a655e2e5113950cbdaf89a5333ca643ddeb11ba"
        },
        "date": 1702257879713,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18949970567578453,
            "unit": "iter/sec",
            "range": "stddev: 0.05241866104310665",
            "extra": "mean: 5.277053050999996 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2518512737259472,
            "unit": "iter/sec",
            "range": "stddev: 0.03856324739382903",
            "extra": "mean: 3.9705973497999993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "distinct": true,
          "id": "6a32f7613b94e73224bec80129c1dc4e9662fc84",
          "message": "Docs: Clean up references to removed cocotb.types.Bit and add newsfragment",
          "timestamp": "2023-12-11T06:50:33-08:00",
          "tree_id": "43ca3840bb1532ea885a4b45bc714eeff4fd02ad",
          "url": "https://github.com/cocotb/cocotb/commit/6a32f7613b94e73224bec80129c1dc4e9662fc84"
        },
        "date": 1702306413767,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1870969409587251,
            "unit": "iter/sec",
            "range": "stddev: 0.03770598265447343",
            "extra": "mean: 5.344822822200001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24898369350467062,
            "unit": "iter/sec",
            "range": "stddev: 0.045558420301865944",
            "extra": "mean: 4.016327278 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fcc7d5c36c0c1baa36c0503eedeeecbb5d6f994f",
          "message": "Bump actions/stale from 8 to 9 (#3576)\n\nBumps [actions/stale](https://github.com/actions/stale) from 8 to 9.\r\n- [Release notes](https://github.com/actions/stale/releases)\r\n- [Changelog](https://github.com/actions/stale/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/actions/stale/compare/v8...v9)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: actions/stale\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-12-11T10:49:19-06:00",
          "tree_id": "a18d6bd9fde2a2e06368193704d7a47464930f48",
          "url": "https://github.com/cocotb/cocotb/commit/fcc7d5c36c0c1baa36c0503eedeeecbb5d6f994f"
        },
        "date": 1702313560468,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18937058908214538,
            "unit": "iter/sec",
            "range": "stddev: 0.04547848649086677",
            "extra": "mean: 5.280651049599993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24783705328342898,
            "unit": "iter/sec",
            "range": "stddev: 0.04855051981093653",
            "extra": "mean: 4.034909174199993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "cc9694d4e260ece911725515aa23eb40b18b50e1",
          "message": "Bump actions/setup-python from 4 to 5\n\nBumps [actions/setup-python](https://github.com/actions/setup-python) from 4 to 5.\n- [Release notes](https://github.com/actions/setup-python/releases)\n- [Commits](https://github.com/actions/setup-python/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/setup-python\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-12-13T20:03:00Z",
          "tree_id": "3b0fd034e7a2ca2725bfe9873b0910ac7770ba1d",
          "url": "https://github.com/cocotb/cocotb/commit/cc9694d4e260ece911725515aa23eb40b18b50e1"
        },
        "date": 1702497976125,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18756807418198124,
            "unit": "iter/sec",
            "range": "stddev: 0.04637300485695858",
            "extra": "mean: 5.3313977037999845 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24834486095964164,
            "unit": "iter/sec",
            "range": "stddev: 0.023264620963284775",
            "extra": "mean: 4.026658720200009 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "4b47f6a90a6fdbc83999411fbfba447ca1060220",
          "message": "Remove unused lgtm.yml file\n\nWe have disabled LGTM for a long time now, let's get rid of the\nassociated config file as well.",
          "timestamp": "2023-12-13T21:24:30Z",
          "tree_id": "28ddd4ca1481e62553121c92e1e3006bdba7d322",
          "url": "https://github.com/cocotb/cocotb/commit/4b47f6a90a6fdbc83999411fbfba447ca1060220"
        },
        "date": 1702502917475,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1461893548300079,
            "unit": "iter/sec",
            "range": "stddev: 0.04964913734490413",
            "extra": "mean: 6.840443349399971 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.199538551591309,
            "unit": "iter/sec",
            "range": "stddev: 0.0331375069182861",
            "extra": "mean: 5.011562888599997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "fb01a05c3c4aeb34f9a171257c3ee7ccc019cb1d",
          "message": "CI: Update to Xcelium 23.09\n\nKeep CI up-to-date with the latest release version of a simulator.",
          "timestamp": "2023-12-13T23:57:00Z",
          "tree_id": "9b28c845eb5670fcd848dbaff91c2e65946839b1",
          "url": "https://github.com/cocotb/cocotb/commit/fb01a05c3c4aeb34f9a171257c3ee7ccc019cb1d"
        },
        "date": 1702511994374,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18552176872059015,
            "unit": "iter/sec",
            "range": "stddev: 0.0381215598840697",
            "extra": "mean: 5.390203030600015 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24807401579400823,
            "unit": "iter/sec",
            "range": "stddev: 0.053034404201337794",
            "extra": "mean: 4.0310549930000095 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "866df6fb0a0268b0cc37e44dad1d46c0299566e7",
          "message": "CI: Include the toplevel language in the job name\n\nDepending on the toplevel language, we're running a very different set\nof tests. Include it in the name to make the tests unambiguous.\n\nWhile at it, refactor the code a bit to\n* place the generation of the human-readable job name into the Python\n  script\n* reuse the name in the Codecov upload, instead of assembling it twice\n  (we can do that now that we have the name in the matrix configuration)\n* consistently use hyphens as delimitter in matrix env keys\n* shorten the simulator version number by removing the module name\n  prefix (e.g. 'siemens/questa/2023.2' to '2023.2')\n* shorten the name by removing spaces around the pipe symbol.\n\nA shorter name helps to display more of it in the left navigation bar of\nthe GH Checks view.",
          "timestamp": "2023-12-14T17:56:18+01:00",
          "tree_id": "6b4e6ce64dbbc40f05588b4da13e6c575b0a55b0",
          "url": "https://github.com/cocotb/cocotb/commit/866df6fb0a0268b0cc37e44dad1d46c0299566e7"
        },
        "date": 1702573150563,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1903390802019595,
            "unit": "iter/sec",
            "range": "stddev: 0.041089458756124825",
            "extra": "mean: 5.253781824199995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2508126741850975,
            "unit": "iter/sec",
            "range": "stddev: 0.0385443425636514",
            "extra": "mean: 3.987039344200002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "46f570d2fa6eb5439022a10a0860d06217908703",
          "message": "CI: Update to Questa 2023.4_1",
          "timestamp": "2023-12-14T17:56:37+01:00",
          "tree_id": "a02654ca99a0752351c1a49a4f7a8874e3334e95",
          "url": "https://github.com/cocotb/cocotb/commit/46f570d2fa6eb5439022a10a0860d06217908703"
        },
        "date": 1702573179390,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18681644124058464,
            "unit": "iter/sec",
            "range": "stddev: 0.030934041175846222",
            "extra": "mean: 5.352847925799995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25108009331992814,
            "unit": "iter/sec",
            "range": "stddev: 0.01962758221456348",
            "extra": "mean: 3.982792848200006 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "b44e324b9070b9ff5070ba94a1d9afdc620a5352",
          "message": "Add test waivers for Riviera-PRO struct and unions in VPI\n\nSee https://github.com/cocotb/cocotb/issues/3587 for a detailed\ndescription of why these waivers are necessary.",
          "timestamp": "2023-12-14T18:53:08+01:00",
          "tree_id": "ea6bf703dba858fd4bb84b2b4beca3b23eacb41b",
          "url": "https://github.com/cocotb/cocotb/commit/b44e324b9070b9ff5070ba94a1d9afdc620a5352"
        },
        "date": 1702576575726,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18207419309686393,
            "unit": "iter/sec",
            "range": "stddev: 0.023550449561812948",
            "extra": "mean: 5.492266548000009 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24471801975774776,
            "unit": "iter/sec",
            "range": "stddev: 0.04867174270199142",
            "extra": "mean: 4.086335779399997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "86b7a17407ca4fdbb9bb1419dbd6aa7f8a9ef229",
          "message": "Bump actions/download-artifact from 3 to 4 (#3592)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 3 to 4.\r\n- [Release notes](https://github.com/actions/download-artifact/releases)\r\n- [Commits](https://github.com/actions/download-artifact/compare/v3...v4)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: actions/download-artifact\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-12-18T17:50:17-05:00",
          "tree_id": "fcb822b59893b93c5674114c2580c29888da5520",
          "url": "https://github.com/cocotb/cocotb/commit/86b7a17407ca4fdbb9bb1419dbd6aa7f8a9ef229"
        },
        "date": 1702939999686,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18762284386652534,
            "unit": "iter/sec",
            "range": "stddev: 0.019794155114047172",
            "extra": "mean: 5.3298413955999875 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2518279080431613,
            "unit": "iter/sec",
            "range": "stddev: 0.022715765855919997",
            "extra": "mean: 3.9709657590000234 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc3ddffa5c50eef9204236c3ec4b614ba5101cd5",
          "message": "Bump actions/upload-artifact from 3 to 4 (#3593)\n\nBumps [actions/upload-artifact](https://github.com/actions/upload-artifact) from 3 to 4.\r\n- [Release notes](https://github.com/actions/upload-artifact/releases)\r\n- [Commits](https://github.com/actions/upload-artifact/compare/v3...v4)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: actions/upload-artifact\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-12-18T18:22:54-06:00",
          "tree_id": "2f8e35a934b442b773919289f3bf6fc7cde4e319",
          "url": "https://github.com/cocotb/cocotb/commit/bc3ddffa5c50eef9204236c3ec4b614ba5101cd5"
        },
        "date": 1702945560940,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18863046135990444,
            "unit": "iter/sec",
            "range": "stddev: 0.030983558636707015",
            "extra": "mean: 5.301370694799994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25289934659048824,
            "unit": "iter/sec",
            "range": "stddev: 0.031097607558406275",
            "extra": "mean: 3.9541422841999974 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "programming@goodcleanfun.de",
            "name": "T. Meissner",
            "username": "tmeissner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc2be3cc87209b38db9de5115f8d0ac1db2ee2f7",
          "message": "Add support for VHDL libraries in NVC Makefile (#3599)\n\nAdd support of VHDL libraries in NVC makefile",
          "timestamp": "2023-12-21T21:29:46+01:00",
          "tree_id": "37b6c31df535801e9acc19aaca17650622d0c5d5",
          "url": "https://github.com/cocotb/cocotb/commit/bc2be3cc87209b38db9de5115f8d0ac1db2ee2f7"
        },
        "date": 1703190779764,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1906251012426591,
            "unit": "iter/sec",
            "range": "stddev: 0.034648914149280424",
            "extra": "mean: 5.2458988532000035 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25469976023108293,
            "unit": "iter/sec",
            "range": "stddev: 0.0537219601868928",
            "extra": "mean: 3.9261913677999702 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "42102157+jshaker000@users.noreply.github.com",
            "name": "Joseph Shaker",
            "username": "jshaker000"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee652a27a32c6a0f284c6054a7c07742920fe1a5",
          "message": "Update VpiImpl.cpp (#2985)",
          "timestamp": "2023-12-23T15:28:01-06:00",
          "tree_id": "99ec0b911394d94c08b3cee441fe303ce7bd8d2a",
          "url": "https://github.com/cocotb/cocotb/commit/ee652a27a32c6a0f284c6054a7c07742920fe1a5"
        },
        "date": 1703367056637,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18814012004254738,
            "unit": "iter/sec",
            "range": "stddev: 0.018183917987219255",
            "extra": "mean: 5.31518742400001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2504643310143499,
            "unit": "iter/sec",
            "range": "stddev: 0.05737693579464826",
            "extra": "mean: 3.992584476800039 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "ba070a73ff6e7ca58fa8c3cf9e5439d16bd098a7",
          "message": "Add pre-commit autoupdate daily action",
          "timestamp": "2023-12-26T16:43:53-06:00",
          "tree_id": "0857a12faa0442eb498ea3f0d169e601a8b42355",
          "url": "https://github.com/cocotb/cocotb/commit/ba070a73ff6e7ca58fa8c3cf9e5439d16bd098a7"
        },
        "date": 1703630805055,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18721645416737234,
            "unit": "iter/sec",
            "range": "stddev: 0.0334946027390594",
            "extra": "mean: 5.3414108521999655 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25271109035174416,
            "unit": "iter/sec",
            "range": "stddev: 0.04480016192397017",
            "extra": "mean: 3.957087908599965 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb683a83368af6703a6a326a62d9911603028a66",
          "message": "Fix broken pre-commit autoupdate github action (#3610)",
          "timestamp": "2023-12-28T14:34:24-06:00",
          "tree_id": "3c865479c1103efcc2f28f9e2aa508493a39bb27",
          "url": "https://github.com/cocotb/cocotb/commit/cb683a83368af6703a6a326a62d9911603028a66"
        },
        "date": 1703795839254,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18542891756268237,
            "unit": "iter/sec",
            "range": "stddev: 0.04757549584500742",
            "extra": "mean: 5.392902105799976 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24770231955071478,
            "unit": "iter/sec",
            "range": "stddev: 0.026784934633891404",
            "extra": "mean: 4.037103898800024 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "c05526e6ee9ce70e7d8bad20921c54d5e0cfd0d1",
          "message": "CI: Fix artifact upload\n\nhttps://github.com/cocotb/cocotb/pull/3593 updated the version of\nactions/upload-artifact from 3 to 4, but didn't perform the migration as\ndescribed at\nhttps://github.com/actions/upload-artifact/blob/main/docs/MIGRATION.md.\nDo that to fix the broken release CI.",
          "timestamp": "2024-01-01T15:58:34+01:00",
          "tree_id": "cf2c98dda07ead1850ab237ea22a9ce98196a6ba",
          "url": "https://github.com/cocotb/cocotb/commit/c05526e6ee9ce70e7d8bad20921c54d5e0cfd0d1"
        },
        "date": 1704121291961,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18660904539027748,
            "unit": "iter/sec",
            "range": "stddev: 0.041377040738572804",
            "extra": "mean: 5.358797039599994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25228880759493294,
            "unit": "iter/sec",
            "range": "stddev: 0.028287673003891792",
            "extra": "mean: 3.9637113098000327 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "1ba4da5eca0ba1f239e6347a0fdee9ffc3bf061b",
          "message": "Add a missing newsfragment for #3490",
          "timestamp": "2024-01-01T21:31:03+01:00",
          "tree_id": "cef3a7cba24721a5cc19cccfb386fb79c6598c50",
          "url": "https://github.com/cocotb/cocotb/commit/1ba4da5eca0ba1f239e6347a0fdee9ffc3bf061b"
        },
        "date": 1704141235618,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18835937067740843,
            "unit": "iter/sec",
            "range": "stddev: 0.05288403633365848",
            "extra": "mean: 5.309000536600001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2514060155578334,
            "unit": "iter/sec",
            "range": "stddev: 0.04737915969643285",
            "extra": "mean: 3.9776295637999963 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "cb0bca4112474bbf28679100274c8b2bb72122ca",
          "message": "cocotb runner uses HDL_TOPLEVEL_LANG instead of TOPLEVEL_LANG\n\nIn our noxfile, we set HDL_TOPLEVEL_LANG to match TOPLEVEL_LANG, but\nthe authoritative environment variable is apparently meant to be\nHDL_TOPLEVEL_LANG.",
          "timestamp": "2024-01-02T16:36:43+01:00",
          "tree_id": "6b3b58c9d0608e9bb9b4c4463716f8da0bcf607a",
          "url": "https://github.com/cocotb/cocotb/commit/cb0bca4112474bbf28679100274c8b2bb72122ca"
        },
        "date": 1704209987219,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18813025130764216,
            "unit": "iter/sec",
            "range": "stddev: 0.036763509688727304",
            "extra": "mean: 5.315466242399998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24881558905313306,
            "unit": "iter/sec",
            "range": "stddev: 0.08864720043416015",
            "extra": "mean: 4.019040783600002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "ca08146e413090a6770881fc4d9fed6d2b8b0f91",
          "message": "Require explicit marker declarations in pytest\n\nPytest normally only warns about undeclared markers, a warning which is\neasily lost in the CI logs. Convert the warning into an error to avoid\nmissing undeclared markers (which makes it harder to discover them).",
          "timestamp": "2024-01-02T16:37:00+01:00",
          "tree_id": "38e05087af54238ba2662aa6ce0525e8fbbdee5d",
          "url": "https://github.com/cocotb/cocotb/commit/ca08146e413090a6770881fc4d9fed6d2b8b0f91"
        },
        "date": 1704210157090,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.202074930426747,
            "unit": "iter/sec",
            "range": "stddev: 0.045158402688794036",
            "extra": "mean: 4.948659380400005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.27193560327264454,
            "unit": "iter/sec",
            "range": "stddev: 0.04043516613547356",
            "extra": "mean: 3.677341208600012 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "5125a297f8d1890b87e3ded374a076c0b3f5db59",
          "message": "CI: Enable Xcelium/VHPI testing",
          "timestamp": "2024-01-02T18:57:29+01:00",
          "tree_id": "45d8c1daadf64c9487aa9a76bcbb284e581ab426",
          "url": "https://github.com/cocotb/cocotb/commit/5125a297f8d1890b87e3ded374a076c0b3f5db59"
        },
        "date": 1704218454596,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1907171850704939,
            "unit": "iter/sec",
            "range": "stddev: 0.03235072755202235",
            "extra": "mean: 5.2433659800000445 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25525169708722384,
            "unit": "iter/sec",
            "range": "stddev: 0.04130803917981687",
            "extra": "mean: 3.9177016701999947 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@users.noreply.github.com",
            "name": "ktbarrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "f2defc1a5d69c6bce810a018facab11e5bdc577b",
          "message": "Update pre-commit hooks",
          "timestamp": "2024-01-03T07:52:34+01:00",
          "tree_id": "826a2f2990a0d922033453020cd379f88275f686",
          "url": "https://github.com/cocotb/cocotb/commit/f2defc1a5d69c6bce810a018facab11e5bdc577b"
        },
        "date": 1704264925842,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18815138896110611,
            "unit": "iter/sec",
            "range": "stddev: 0.03681702663880609",
            "extra": "mean: 5.314869082400003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2487603155423283,
            "unit": "iter/sec",
            "range": "stddev: 0.061196813260508104",
            "extra": "mean: 4.019933797800007 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "772eeea53f5010ac8d0ec42b78b8c02d6907a415",
          "message": "GHDL: Support COCOTB_HDL_TIMEPRECISION if possible\n\nGHDL with the mcode backend supports some values of\nCOCOTB_HDL_TIMEPRECISION (fs, ps, ns, us, ms, s), and only if the\nmcode backend is used. Try to pass on the value of\nCOCOTB_HDL_TIMEPRECISION if possible, without checking for the backend:\nGHDL will error out in that case and users have to avoid setting\nCOCOTB_HDL_TIMEPRECISION when that happens.\n\nAlso adjust the cocotb runner implementation accordingly.\n\nSee also https://github.com/cocotb/cocotb/pull/3613#discussion_r1439710866",
          "timestamp": "2024-01-03T09:26:17+01:00",
          "tree_id": "3ecee88db17c302a896cd3a5a7e6c1c826779f3d",
          "url": "https://github.com/cocotb/cocotb/commit/772eeea53f5010ac8d0ec42b78b8c02d6907a415"
        },
        "date": 1704270554066,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18650137055267488,
            "unit": "iter/sec",
            "range": "stddev: 0.04959480447992426",
            "extra": "mean: 5.36189089139998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2524169711519098,
            "unit": "iter/sec",
            "range": "stddev: 0.02248068225664489",
            "extra": "mean: 3.961698753599967 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "7b84015ecfed66596051751f7b07e6dfaf3c080f",
          "message": "CI: Use distinct labels for private jobs\n\nLabels in GitHub Actions are used to determine which runner can execute\na CI job. With our setup of self-hosted and GitHub-hosted runners,\nlabels decide if a job gets to run on our own infrastructure, or on\nGitHub infrastructure.\n\nRight now, we're assinging the labels \"self-hosted\", \"ubuntu-20.04\",\n\"cocotb-private\", \"X64\" and \"Linux\" to all self-hosted runners.\n\nAll jobs that we want to run on our self-hosted runners get the labels\n\"self-hosted\", \"cocotb-private\", and \"ubuntu-20.04\" assigned.\n\nJobs that we want to run on the GitHub-provided runners only get a\nsingle label, the operating system, such as \"ubuntu-20.04\".\n\nAs it turns out, a job gets executed on a particular runner as soon as\nall labels assigned *to the job* are matching labels assigned to the\nrunner.\n\nFor us, this meant a job assigned only the label \"ubuntu-20.04\" (a job\nwhich we want to execute on GitHub-provided runners) got executed on\nour self-hosted runners, since \"ubuntu-20.04\" is one of the labels of\nour self-hosted runners as well.\n\nAvoid this situation by using label names for our self-hosted runner\nwhich are not used by GitHub runners\n(https://docs.github.com/en/actions/using-jobs/choosing-the-runner-for-a-job).\n\nSee also https://github.com/philips-labs/terraform-aws-github-runner/issues/3290\nfor a discussion and\nhttps://github.com/philips-labs/terraform-aws-github-runner/blob/6fa667fae7e4302cf643bcdb4ff3c91b1e4ed8d1/lambdas/functions/webhook/src/webhook/index.ts#L83-L86\nfor the label matching code.",
          "timestamp": "2024-01-03T19:43:57+01:00",
          "tree_id": "858ec9bfda99121883d37708d33abc5aa1e961ec",
          "url": "https://github.com/cocotb/cocotb/commit/7b84015ecfed66596051751f7b07e6dfaf3c080f"
        },
        "date": 1704307621169,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1880822696395897,
            "unit": "iter/sec",
            "range": "stddev: 0.03728552721205493",
            "extra": "mean: 5.316822271000012 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2536258354379929,
            "unit": "iter/sec",
            "range": "stddev: 0.035728656824667325",
            "extra": "mean: 3.942815992199985 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "2ae5415e76d6584fb8741ee0e35c779111045241",
          "message": "Remove unmaintained WaveDrom tracer\n\nThe WaveDrom tracer is a nice example of what can be done with cocotb,\nbut it's neither maintained nor tested. Remove it from the core of\ncocotb, and encourage users to either copy it into their own source\ntree, or create an extension.\n\nCloses #2066",
          "timestamp": "2024-01-03T21:06:32+01:00",
          "tree_id": "bff3e727e902186c93f45cbdae2adda146d8e9af",
          "url": "https://github.com/cocotb/cocotb/commit/2ae5415e76d6584fb8741ee0e35c779111045241"
        },
        "date": 1704312584036,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18586169581302903,
            "unit": "iter/sec",
            "range": "stddev: 0.02582327972785947",
            "extra": "mean: 5.380344753799989 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25027322192490026,
            "unit": "iter/sec",
            "range": "stddev: 0.057382760807202275",
            "extra": "mean: 3.9956332215999963 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1119021f6581fd1be684694755b1b350a419b945",
          "message": "Set author name in pre-commit-autoupdate.yml (#3628)\n\nBy default it uses the action's actor as the author, I guess because I authored the action file with the cron line in it that means it's me? Either way I'm explicitly setting it to the Github Actions bot account.",
          "timestamp": "2024-01-03T14:13:48-06:00",
          "tree_id": "37cce45e909789e8d5bc31d429077c506552ac67",
          "url": "https://github.com/cocotb/cocotb/commit/1119021f6581fd1be684694755b1b350a419b945"
        },
        "date": 1704313006568,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18729099675832184,
            "unit": "iter/sec",
            "range": "stddev: 0.02966184941964045",
            "extra": "mean: 5.339284948600005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25012357535329255,
            "unit": "iter/sec",
            "range": "stddev: 0.03500109972654892",
            "extra": "mean: 3.9980237712000077 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "b71735f1ff8f188b6a513f7c20ac9f78fc4cfbd9",
          "message": "Add mark for cocotb.test-decorated objects",
          "timestamp": "2024-01-03T22:39:44-06:00",
          "tree_id": "6434e8a060d5e4e029b12dc83da62ab8ae36bb3c",
          "url": "https://github.com/cocotb/cocotb/commit/b71735f1ff8f188b6a513f7c20ac9f78fc4cfbd9"
        },
        "date": 1704343354616,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18731777989085416,
            "unit": "iter/sec",
            "range": "stddev: 0.03618672431961605",
            "extra": "mean: 5.3385215251999965 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2501308311813814,
            "unit": "iter/sec",
            "range": "stddev: 0.03547115120818488",
            "extra": "mean: 3.997907795999981 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "distinct": true,
          "id": "7216afd53d3993aa25d03e2e4ab97880c95f0e27",
          "message": "Update test_edge_on_vector expected edge count\n\nWhen running the test_cocotb subset in tests/pytest with Verilator, the edge count was one less than expected.\nRunning test_cocotb with the makefile produced the expected result.\nThis discrepancy appears to be caused by whatever state the previous test left dut.stream_in_data in, so set the value before starting the monitor Task.",
          "timestamp": "2024-01-04T08:41:26-08:00",
          "tree_id": "03f630c54232dfc56579f8349629ad432b745727",
          "url": "https://github.com/cocotb/cocotb/commit/7216afd53d3993aa25d03e2e4ab97880c95f0e27"
        },
        "date": 1704386661198,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.19042379681571772,
            "unit": "iter/sec",
            "range": "stddev: 0.01752128742921212",
            "extra": "mean: 5.251444497599993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25236687769006727,
            "unit": "iter/sec",
            "range": "stddev: 0.04575032579446657",
            "extra": "mean: 3.9624851293999996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "60c7b5b04e40eec99377bdb5cc1000610953cf26",
          "message": "GHDL: Only pass --time-resolution if mcode is used\n\nGHDL errors out if `--time-resolution` is passed and a backend other\nthan mcode is used (other than silently ignoring this option). This\nbehavior requires us to check the GHDL backend before calling it.\nImplement this behavior in our Makefiles and in the cocotb runner.\n\nFixes #3629",
          "timestamp": "2024-01-04T18:53:39+01:00",
          "tree_id": "d8770d1706fd498ab932e4a5d75cd6f931b78aff",
          "url": "https://github.com/cocotb/cocotb/commit/60c7b5b04e40eec99377bdb5cc1000610953cf26"
        },
        "date": 1704390995797,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18663127359541562,
            "unit": "iter/sec",
            "range": "stddev: 0.046295690475999414",
            "extra": "mean: 5.358158794799993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25127997891472703,
            "unit": "iter/sec",
            "range": "stddev: 0.051647442453850965",
            "extra": "mean: 3.979624657400001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a39d6e32f0711ffc86627b3cfbdc257d0e0f8367",
          "message": "Move around commandline args in Makefile.icarus (#3637)\n\nMoves default language version in iverilog commandline arg earlier to allow the user to override it later with COMPILE_ARGS.",
          "timestamp": "2024-01-04T12:19:21-06:00",
          "tree_id": "ca0d82089386edc30548ce3f7e28def1c7db514b",
          "url": "https://github.com/cocotb/cocotb/commit/a39d6e32f0711ffc86627b3cfbdc257d0e0f8367"
        },
        "date": 1704392537129,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18020332597591068,
            "unit": "iter/sec",
            "range": "stddev: 0.06591548354801346",
            "extra": "mean: 5.549287143200002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2427354121104561,
            "unit": "iter/sec",
            "range": "stddev: 0.01713268545054459",
            "extra": "mean: 4.119712040800016 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "54652c04ca52dbeb3b7515f37a45ec515a99e31e",
          "message": "Improve SimHandleBase\n\n* Remove duplicate interface that conflicts with non-prefixed namespace\n  intended for sub-handles\n* Mark a couple methods as public\n* Improve typing and documentation",
          "timestamp": "2024-01-04T17:00:34-06:00",
          "tree_id": "e0a87697c294b3ac7555c563e341a3242067469a",
          "url": "https://github.com/cocotb/cocotb/commit/54652c04ca52dbeb3b7515f37a45ec515a99e31e"
        },
        "date": 1704409404973,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18786304074237636,
            "unit": "iter/sec",
            "range": "stddev: 0.032326048699568566",
            "extra": "mean: 5.3230267968000025 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2519876258279126,
            "unit": "iter/sec",
            "range": "stddev: 0.02568895210811397",
            "extra": "mean: 3.9684488343999873 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "139285a694c0b649b5eb2451a507b1bf4f5eaa46",
          "message": "Update pre-commit hooks",
          "timestamp": "2024-01-12T13:59:03+01:00",
          "tree_id": "62ad6b2009d6768059f34a4531b0603f217f6c08",
          "url": "https://github.com/cocotb/cocotb/commit/139285a694c0b649b5eb2451a507b1bf4f5eaa46"
        },
        "date": 1705064531836,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18741551979549448,
            "unit": "iter/sec",
            "range": "stddev: 0.025864593076789226",
            "extra": "mean: 5.335737409000001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25060347814801714,
            "unit": "iter/sec",
            "range": "stddev: 0.056626929770310766",
            "extra": "mean: 3.9903676013999982 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "distinct": true,
          "id": "8a994bb94f2e2abc819ba49fac2c5bb4b858b8aa",
          "message": "CI: When running Lint action, show git diff after running pre-commit\n\nFor PR feedback on failed lint checks, it is more useful to show the needed changes when possible rather than just Passed/Failed for each hook.",
          "timestamp": "2024-01-13T11:23:50-08:00",
          "tree_id": "4451fb5ec33230278d4a4e13afc676bee1572347",
          "url": "https://github.com/cocotb/cocotb/commit/8a994bb94f2e2abc819ba49fac2c5bb4b858b8aa"
        },
        "date": 1705174011271,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1878834510298961,
            "unit": "iter/sec",
            "range": "stddev: 0.04814969179552975",
            "extra": "mean: 5.322448542000006 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.251632511172339,
            "unit": "iter/sec",
            "range": "stddev: 0.033813817268357395",
            "extra": "mean: 3.974049280599979 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "cae0d4ca4d2300372851b202cba21dd9c22b923b",
          "message": "Update pre-commit hooks",
          "timestamp": "2024-01-14T10:02:00+01:00",
          "tree_id": "e71851cd9af0fe91badf8e9d0f4ed86f0abd7838",
          "url": "https://github.com/cocotb/cocotb/commit/cae0d4ca4d2300372851b202cba21dd9c22b923b"
        },
        "date": 1705223105456,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18661298286092276,
            "unit": "iter/sec",
            "range": "stddev: 0.04065648788003724",
            "extra": "mean: 5.35868397079999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24909138884273613,
            "unit": "iter/sec",
            "range": "stddev: 0.03576265882566494",
            "extra": "mean: 4.0145908079999915 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "6dde70b5036c87b38eaad4aa582e1bd3673d5972",
          "message": "Update numbers on Xcelium's mixedlang recursive_discovery",
          "timestamp": "2024-01-14T21:09:02-06:00",
          "tree_id": "faf5116186e66cf6aff052c4761ce1e64e0438b4",
          "url": "https://github.com/cocotb/cocotb/commit/6dde70b5036c87b38eaad4aa582e1bd3673d5972"
        },
        "date": 1705288321016,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1866819623850543,
            "unit": "iter/sec",
            "range": "stddev: 0.04471520800303167",
            "extra": "mean: 5.356703921599978 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2506006908583916,
            "unit": "iter/sec",
            "range": "stddev: 0.06336211067444605",
            "extra": "mean: 3.990411983999979 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "distinct": true,
          "id": "579d0dbafc4a806da0ae4ebd9183227c3d360eb0",
          "message": "Add test that uses MODULE value of the form \"package_name.module_name\"",
          "timestamp": "2024-01-14T20:30:41-08:00",
          "tree_id": "b5aacb74a2d286887b98428f14defadb3cf4a0be",
          "url": "https://github.com/cocotb/cocotb/commit/579d0dbafc4a806da0ae4ebd9183227c3d360eb0"
        },
        "date": 1705293225541,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1870105128419465,
            "unit": "iter/sec",
            "range": "stddev: 0.033866226192402614",
            "extra": "mean: 5.347292966600003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25046181399068085,
            "unit": "iter/sec",
            "range": "stddev: 0.035798082443578724",
            "extra": "mean: 3.992624600399995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a3220c5ed6c05a48648593479438bdfa5c91648",
          "message": "Decouple implementation of Array and LogicArray (#3633)",
          "timestamp": "2024-01-15T18:16:37-06:00",
          "tree_id": "41caeb1ec0b87ac1f29a692a6fc928cf48b0a6b2",
          "url": "https://github.com/cocotb/cocotb/commit/6a3220c5ed6c05a48648593479438bdfa5c91648"
        },
        "date": 1705364370238,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1864410955416997,
            "unit": "iter/sec",
            "range": "stddev: 0.04091969751292339",
            "extra": "mean: 5.363624350599991 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2502543612856081,
            "unit": "iter/sec",
            "range": "stddev: 0.010521811291746001",
            "extra": "mean: 3.995934356000009 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tstrader@hudson-trading.com",
            "name": "Todd Strader",
            "username": "toddstrader"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8978bb515e6ec34613ae42e44a2c2b3ced83671a",
          "message": "Don't require Verilator binary for testing (#3666)",
          "timestamp": "2024-01-18T09:01:07-06:00",
          "tree_id": "3d93e9bbe50c49c5968529487e74475f5a1febf8",
          "url": "https://github.com/cocotb/cocotb/commit/8978bb515e6ec34613ae42e44a2c2b3ced83671a"
        },
        "date": 1705590257876,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18737419983374118,
            "unit": "iter/sec",
            "range": "stddev: 0.029155781669524723",
            "extra": "mean: 5.336914051600002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24791679912974823,
            "unit": "iter/sec",
            "range": "stddev: 0.03227127901725983",
            "extra": "mean: 4.0336112902000085 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "77cd93a0de1a82553ebf1e9edfd3875dfb1da7e0",
          "message": "Improve RegionObjects\n\n* Make _child_handle and _sub_handle_key abstract and move base impl to\n  HierarchyObject.\n* Add _keys, _values, and _items to iterate over discovered objects.\n* Rename RegionObject to HierarchyObjectBase\n* rename HierarchyArray.__get_sub_handle_by_name to __getitem__ to add\n  support for index syntax.\n* remove invalid sub-handle caching as it's just silly to speed up an\n  invalid path that will likely never be hit again because of the\n  resulting AttributeError.\n* deprecate _id method as index syntax does everything it does with\n  better defaults.\n* Add left, right, direction, range, and __len__ methods to\n  HierarchyArrayObject.\n* Generalize __getitem__ and move to HierarchyObjectBase\n* Improve documentation and typing.",
          "timestamp": "2024-01-19T22:58:40-06:00",
          "tree_id": "d15368bd3b923a98b54e7d7b7d8ff39dc990afbe",
          "url": "https://github.com/cocotb/cocotb/commit/77cd93a0de1a82553ebf1e9edfd3875dfb1da7e0"
        },
        "date": 1705726924008,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1853807263407667,
            "unit": "iter/sec",
            "range": "stddev: 0.054276698058496546",
            "extra": "mean: 5.394304034399999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24583542486220306,
            "unit": "iter/sec",
            "range": "stddev: 0.048172500642913174",
            "extra": "mean: 4.067762002000018 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "4b32fb9a3b7115da511bc35126d10547b10de699",
          "message": "Update pre-commit hooks",
          "timestamp": "2024-01-20T21:14:59+01:00",
          "tree_id": "893509032f1f2dfa73bb588439d589e2f7c1be92",
          "url": "https://github.com/cocotb/cocotb/commit/4b32fb9a3b7115da511bc35126d10547b10de699"
        },
        "date": 1705781905262,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18444407667762872,
            "unit": "iter/sec",
            "range": "stddev: 0.04689294026956307",
            "extra": "mean: 5.4216975574000115 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24921928337393004,
            "unit": "iter/sec",
            "range": "stddev: 0.042501612937852526",
            "extra": "mean: 4.012530597400018 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "4caa489e44f5f4887a994fc8a7d26b15d95e5ad2",
          "message": "Make Logic not hashable and support equality with literals",
          "timestamp": "2024-01-21T16:18:46-06:00",
          "tree_id": "c2363bbd2d294cefa7da0db56343ebd913449475",
          "url": "https://github.com/cocotb/cocotb/commit/4caa489e44f5f4887a994fc8a7d26b15d95e5ad2"
        },
        "date": 1705875784687,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09399326899932524,
            "unit": "iter/sec",
            "range": "stddev: 0.08074746951844941",
            "extra": "mean: 10.639059696999993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10624046359277722,
            "unit": "iter/sec",
            "range": "stddev: 0.10827806548629212",
            "extra": "mean: 9.412609529199994 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "e9f745e183d9169e35ac627d144f818151182c92",
          "message": "Make cocotb.outcomes private",
          "timestamp": "2024-01-21T20:55:11-06:00",
          "tree_id": "7db718c24453a9edd340703980ee5d548745d448",
          "url": "https://github.com/cocotb/cocotb/commit/e9f745e183d9169e35ac627d144f818151182c92"
        },
        "date": 1705892363162,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09430416877929654,
            "unit": "iter/sec",
            "range": "stddev: 0.057572998627801825",
            "extra": "mean: 10.603985093600011 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1067755485214801,
            "unit": "iter/sec",
            "range": "stddev: 0.10315611754744354",
            "extra": "mean: 9.365440064199992 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "32450aab0a759c53c33e5a653ce61b80f7c8da0c",
          "message": "Update cocotb-coverage to 1.2 in ecosyste compat tests\n\nUse the latest upstream release of cocotb-coverage to get a better\nsignal how we're doing against cocotb-coverage. Some breakage is still\nexpected as we make rapid progress towards cocotb 2.0\n\nIncludes a fix for https://github.com/mciepluc/cocotb-coverage/issues/86.",
          "timestamp": "2024-01-22T10:02:07+01:00",
          "tree_id": "e845547f0956ae72ebc7e0370748086ccd68ffc8",
          "url": "https://github.com/cocotb/cocotb/commit/32450aab0a759c53c33e5a653ce61b80f7c8da0c"
        },
        "date": 1705914391700,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09385965152675035,
            "unit": "iter/sec",
            "range": "stddev: 0.11709802194659494",
            "extra": "mean: 10.654205334599993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10673110302394001,
            "unit": "iter/sec",
            "range": "stddev: 0.02685699932190336",
            "extra": "mean: 9.369340067400014 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tstrader@hudson-trading.com",
            "name": "Todd Strader",
            "username": "toddstrader"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6c1a2ec9fa3e41d071c8e5ee2e9965dd9295a7d",
          "message": "Allow runner absolute path results XML (#3669)",
          "timestamp": "2024-01-23T14:18:29-06:00",
          "tree_id": "9bb8766b2e3c7fff78bf2f0a977c2c6743017ccc",
          "url": "https://github.com/cocotb/cocotb/commit/d6c1a2ec9fa3e41d071c8e5ee2e9965dd9295a7d"
        },
        "date": 1706041384465,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09335174751817316,
            "unit": "iter/sec",
            "range": "stddev: 0.05945114309332392",
            "extra": "mean: 10.712172258000056 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10662709507810952,
            "unit": "iter/sec",
            "range": "stddev: 0.049386608753648274",
            "extra": "mean: 9.378479262399969 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tstrader@hudson-trading.com",
            "name": "Todd Strader",
            "username": "toddstrader"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "62f1839525e56ee6fe17f558d49aa513fbc7e745",
          "message": "Runner log redirection (#3668)",
          "timestamp": "2024-01-24T20:38:12-06:00",
          "tree_id": "3eef9aeeb321daac1cc568c532ddd21b5dd4212b",
          "url": "https://github.com/cocotb/cocotb/commit/62f1839525e56ee6fe17f558d49aa513fbc7e745"
        },
        "date": 1706150536612,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09466621597643862,
            "unit": "iter/sec",
            "range": "stddev: 0.07215341442608621",
            "extra": "mean: 10.563430572200001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10713033436662976,
            "unit": "iter/sec",
            "range": "stddev: 0.06057330005545922",
            "extra": "mean: 9.334424333800007 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tstrader@hudson-trading.com",
            "name": "Todd Strader",
            "username": "toddstrader"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f7b37ca50ccd72ba99a608f5d0acc634523bfcab",
          "message": "Add Verilator run-time trace switch (#3667)",
          "timestamp": "2024-01-24T20:38:46-06:00",
          "tree_id": "7542bea6496b41f3d242495568018b0641e46999",
          "url": "https://github.com/cocotb/cocotb/commit/f7b37ca50ccd72ba99a608f5d0acc634523bfcab"
        },
        "date": 1706150576911,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09383478446172619,
            "unit": "iter/sec",
            "range": "stddev: 0.08502957966150008",
            "extra": "mean: 10.657028795199983 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10665841921423884,
            "unit": "iter/sec",
            "range": "stddev: 0.09032282006325727",
            "extra": "mean: 9.375724929800015 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6b13a505d3708c5178a96f470d81231685a8a9a",
          "message": "Fix ruff config (#3680)",
          "timestamp": "2024-01-27T10:27:16-06:00",
          "tree_id": "041a39f08de001ff893584b49519243c07003996",
          "url": "https://github.com/cocotb/cocotb/commit/d6b13a505d3708c5178a96f470d81231685a8a9a"
        },
        "date": 1706373077058,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09746665582228987,
            "unit": "iter/sec",
            "range": "stddev: 0.1403689466915807",
            "extra": "mean: 10.259919062200016 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11235256288630327,
            "unit": "iter/sec",
            "range": "stddev: 0.09621856717198676",
            "extra": "mean: 8.90055352820001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fcd021de003d74bbf45790d5cc3a6a53152229ba",
          "message": "Update pre-commit hooks (#3690)\n\nCo-authored-by: github-actions[bot] <github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-30T11:06:00-06:00",
          "tree_id": "49ac55ec4f0b2e894082eb6b15f3c0947ca714f4",
          "url": "https://github.com/cocotb/cocotb/commit/fcd021de003d74bbf45790d5cc3a6a53152229ba"
        },
        "date": 1706634676685,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09322077417206884,
            "unit": "iter/sec",
            "range": "stddev: 0.0255765422197255",
            "extra": "mean: 10.727222648400016 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10615689460514144,
            "unit": "iter/sec",
            "range": "stddev: 0.07507518945288456",
            "extra": "mean: 9.420019337600024 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "caca6d3990e3f4675067431b7b9513d9bc8755d0",
          "message": "Bump peter-evans/create-pull-request from 5 to 6 (#3698)\n\nBumps [peter-evans/create-pull-request](https://github.com/peter-evans/create-pull-request) from 5 to 6.\r\n- [Release notes](https://github.com/peter-evans/create-pull-request/releases)\r\n- [Commits](https://github.com/peter-evans/create-pull-request/compare/v5...v6)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: peter-evans/create-pull-request\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-05T15:10:06-06:00",
          "tree_id": "d4acc8e33eb8e2e88bb4dfc5f54af03ecb7ed538",
          "url": "https://github.com/cocotb/cocotb/commit/caca6d3990e3f4675067431b7b9513d9bc8755d0"
        },
        "date": 1707167820580,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09406763591563896,
            "unit": "iter/sec",
            "range": "stddev: 0.09233299069832059",
            "extra": "mean: 10.630648790799977 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10675339488966422,
            "unit": "iter/sec",
            "range": "stddev: 0.03917722271359192",
            "extra": "mean: 9.367383595000025 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1e144a6194c0e8ab790259e2ad5f2d7d90ea0ed5",
          "message": "Update pre-commit hooks (#3695)",
          "timestamp": "2024-02-05T15:13:03-06:00",
          "tree_id": "547ebe465339b076190ab1f94fe490946c91505b",
          "url": "https://github.com/cocotb/cocotb/commit/1e144a6194c0e8ab790259e2ad5f2d7d90ea0ed5"
        },
        "date": 1707168166597,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09382311655645213,
            "unit": "iter/sec",
            "range": "stddev: 0.0680557628401198",
            "extra": "mean: 10.658354110400001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10710833531924596,
            "unit": "iter/sec",
            "range": "stddev: 0.04811584245246753",
            "extra": "mean: 9.336341537 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "800538bb93057bba01859920b52cf8c558eb00eb",
          "message": "Update pre-commit hooks (#3700)",
          "timestamp": "2024-02-05T21:48:43-06:00",
          "tree_id": "439b49003c5beb2ebd6d6a8432a6e8c68409acb7",
          "url": "https://github.com/cocotb/cocotb/commit/800538bb93057bba01859920b52cf8c558eb00eb"
        },
        "date": 1707191585731,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.0925334963955598,
            "unit": "iter/sec",
            "range": "stddev: 0.08105254043592576",
            "extra": "mean: 10.806897382599981 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10567190520663923,
            "unit": "iter/sec",
            "range": "stddev: 0.046798450291435895",
            "extra": "mean: 9.463253246399983 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "338e62ceb53c465ea6cc8891e21ca87e0d41518a",
          "message": "Fix ruff config for ruff==2.0 (#3701)",
          "timestamp": "2024-02-06T00:36:39-06:00",
          "tree_id": "f3fccb00afa7d8f54604c78ad865b2e4fb055a27",
          "url": "https://github.com/cocotb/cocotb/commit/338e62ceb53c465ea6cc8891e21ca87e0d41518a"
        },
        "date": 1707201657183,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09270552998516357,
            "unit": "iter/sec",
            "range": "stddev: 0.10743376176994043",
            "extra": "mean: 10.786843030400002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10517199268147089,
            "unit": "iter/sec",
            "range": "stddev: 0.05740772752278283",
            "extra": "mean: 9.508234792400003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anolte512@gmail.com",
            "name": "Andrew Nolte",
            "username": "AndrewNolte"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8f56c34b5a4ce571719d4a3aa2ebfd523d07e23",
          "message": "Return GPI_REGISTER for integer const types (#3691)",
          "timestamp": "2024-02-06T19:32:51-06:00",
          "tree_id": "053998c033325f6d06bd01ffed858565572b0514",
          "url": "https://github.com/cocotb/cocotb/commit/a8f56c34b5a4ce571719d4a3aa2ebfd523d07e23"
        },
        "date": 1707269833753,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09086713624545176,
            "unit": "iter/sec",
            "range": "stddev: 0.08551959944535484",
            "extra": "mean: 11.0050788582 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10592186869633084,
            "unit": "iter/sec",
            "range": "stddev: 0.026862167866934277",
            "extra": "mean: 9.440921051599991 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "todd.strader@gmail.com",
            "name": "Todd Strader",
            "username": "toddstrader"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "13f8545930201250e2dc7a95ec9b165571482bfc",
          "message": "runner trace building for Verilator (#3681)\n\n\r\n---------\r\n\r\nCo-authored-by: Kaleb Barrett <dev.ktbarrett@gmail.com>",
          "timestamp": "2024-02-07T17:43:16+01:00",
          "tree_id": "ccf39c7881088f6e116d7746b8596ed5b6f23283",
          "url": "https://github.com/cocotb/cocotb/commit/13f8545930201250e2dc7a95ec9b165571482bfc"
        },
        "date": 1707324451175,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09144692096749037,
            "unit": "iter/sec",
            "range": "stddev: 0.06079306975294502",
            "extra": "mean: 10.935305305199972 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10635661384209864,
            "unit": "iter/sec",
            "range": "stddev: 0.05847840315394148",
            "extra": "mean: 9.402330178400007 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "todd.strader@gmail.com",
            "name": "Todd Strader",
            "username": "toddstrader"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "704ff21ac2eb5d8a6c68d8d83c28e3d151f519a7",
          "message": "Add test_args to Python runner for Verilator (#3682)\n\n\r\n---------\r\n\r\nCo-authored-by: Kaleb Barrett <dev.ktbarrett@gmail.com>",
          "timestamp": "2024-02-07T17:45:28+01:00",
          "tree_id": "bbe88005704f6e6f5be83fbfe0bc7261b288e37d",
          "url": "https://github.com/cocotb/cocotb/commit/704ff21ac2eb5d8a6c68d8d83c28e3d151f519a7"
        },
        "date": 1707324578704,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09085518034252997,
            "unit": "iter/sec",
            "range": "stddev: 0.05788884735088923",
            "extra": "mean: 11.006527049199997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10666342807600376,
            "unit": "iter/sec",
            "range": "stddev: 0.13147452284370534",
            "extra": "mean: 9.375284650399976 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anolte512@gmail.com",
            "name": "Andrew Nolte",
            "username": "AndrewNolte"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fdf7286a3a38b703dc4a3bb7c707bfcd2263773a",
          "message": "Parse log level in embed (#3676)\n\nCo-authored-by: Andrew Nolte <anolte@hudson-trading.com>",
          "timestamp": "2024-02-07T17:54:06+01:00",
          "tree_id": "3a5cec2073fc0f3aa9155597f50c8052bd3db15b",
          "url": "https://github.com/cocotb/cocotb/commit/fdf7286a3a38b703dc4a3bb7c707bfcd2263773a"
        },
        "date": 1707325152492,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09085746977839312,
            "unit": "iter/sec",
            "range": "stddev: 0.03048106213813773",
            "extra": "mean: 11.006249705599998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10629536277590186,
            "unit": "iter/sec",
            "range": "stddev: 0.11372076595694747",
            "extra": "mean: 9.407748126400008 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "themperek@users.noreply.github.com",
            "name": "Tomasz Hemperek",
            "username": "themperek"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f918a196fc051a87a528e252b606e8428d5c31b",
          "message": "Enable widows testing in CI (#3706)",
          "timestamp": "2024-02-08T08:55:55+01:00",
          "tree_id": "382c6568881e22d417996ea0b1a6479863c48be6",
          "url": "https://github.com/cocotb/cocotb/commit/0f918a196fc051a87a528e252b606e8428d5c31b"
        },
        "date": 1707379211748,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09071358622177055,
            "unit": "iter/sec",
            "range": "stddev: 0.15735737143278877",
            "extra": "mean: 11.023707050399997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1077750260856662,
            "unit": "iter/sec",
            "range": "stddev: 0.07894755322298198",
            "extra": "mean: 9.278587408600009 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tstrader@hudson-trading.com",
            "name": "Todd Strader",
            "username": "toddstrader"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e1343babbfb3886723ee3e5006a9a9b454549c76",
          "message": "Verilator trace file name parameter (#3683)",
          "timestamp": "2024-02-08T09:30:04-06:00",
          "tree_id": "2509b572e83ad7d9a421b4ee56e75a4d4007cecb",
          "url": "https://github.com/cocotb/cocotb/commit/e1343babbfb3886723ee3e5006a9a9b454549c76"
        },
        "date": 1707406486213,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09127870230634554,
            "unit": "iter/sec",
            "range": "stddev: 0.06513372173582956",
            "extra": "mean: 10.955458115999988 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10596103033283073,
            "unit": "iter/sec",
            "range": "stddev: 0.040622328239833284",
            "extra": "mean: 9.437431826199997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "54800b32fb04b8e2491a120ca6a3004d5ede9087",
          "message": "Validate the pyproject.toml file in pre-commit (#3618)\n\nThe Python tool \"validate-pyproject\" validates the pyproject.toml\r\nagainst a schema. The schemas are shipped in\r\nvalidate-pyproject-schema-store. We want to pin the version of the\r\nschema used to validate our pyproject.toml. We do that by using\r\nvalidate-pyproject-schema-store directly (which depends on\r\nvalidate-pyproject).\r\n\r\nAs a downside, the schema validation adds around 1.5 seconds to a\r\npre-commit run (or in relative numbers, a run now takes roughly 2.5x as\r\nlong on my machine).\r\n\r\nFixes #3617",
          "timestamp": "2024-02-12T08:51:24-06:00",
          "tree_id": "2afac0c1ccf33cafee92885e435613c965997376",
          "url": "https://github.com/cocotb/cocotb/commit/54800b32fb04b8e2491a120ca6a3004d5ede9087"
        },
        "date": 1707749697143,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09011043301229696,
            "unit": "iter/sec",
            "range": "stddev: 0.05052798367718789",
            "extra": "mean: 11.09749411439999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2892530876907149,
            "unit": "iter/sec",
            "range": "stddev: 0.034022082032106715",
            "extra": "mean: 3.4571800356000155 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "87e85fd20b19ec73551496a63f4da7479259e383",
          "message": "Rename cocotb.log to cocotb.logging",
          "timestamp": "2024-02-14T12:42:33-06:00",
          "tree_id": "808c03775e67cf19ebef0f59629d8859bc0780a4",
          "url": "https://github.com/cocotb/cocotb/commit/87e85fd20b19ec73551496a63f4da7479259e383"
        },
        "date": 1707936364050,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09117765783676048,
            "unit": "iter/sec",
            "range": "stddev: 0.06663630244193448",
            "extra": "mean: 10.967599121600006 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.29445179322278475,
            "unit": "iter/sec",
            "range": "stddev: 0.03241378342667456",
            "extra": "mean: 3.3961416537999867 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "a4f93e95419ad1c1826938b5222891ebcfe3e4f5",
          "message": "Add support for casting LogicArray to str and int literal reprs",
          "timestamp": "2024-02-14T17:29:07-06:00",
          "tree_id": "3e6e10effd658055146c70fcf02ef05b885f12d8",
          "url": "https://github.com/cocotb/cocotb/commit/a4f93e95419ad1c1826938b5222891ebcfe3e4f5"
        },
        "date": 1707953553486,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10137893578162581,
            "unit": "iter/sec",
            "range": "stddev: 0.057423583356015606",
            "extra": "mean: 9.86398202239999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.3047087306112769,
            "unit": "iter/sec",
            "range": "stddev: 0.03815372556229728",
            "extra": "mean: 3.2818226047999928 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ecb564e616c17f1617e07b91e2d937a4d640ac5",
          "message": "Update pre-commit hooks (#3713)\n\nCo-authored-by: github-actions[bot] <github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-14T21:25:17-06:00",
          "tree_id": "dfc6a37fbb2245d1b4a968849b5340b8f8256635",
          "url": "https://github.com/cocotb/cocotb/commit/6ecb564e616c17f1617e07b91e2d937a4d640ac5"
        },
        "date": 1707967724773,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10136761844868623,
            "unit": "iter/sec",
            "range": "stddev: 0.05353399560928395",
            "extra": "mean: 9.865083300799995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.305445848027305,
            "unit": "iter/sec",
            "range": "stddev: 0.045791338055472454",
            "extra": "mean: 3.2739027439999973 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "distinct": true,
          "id": "bb2be9cd00da651c930dc61daf7adec9dc994903",
          "message": "Remove unused Queue._finished Event\n\nThis was used to support the proposed Queue.task_done() and Queue.join(),\nbut those were removed during review of #2404. Removing the unused _finished\nEvent was overlooked.",
          "timestamp": "2024-02-16T17:17:09-08:00",
          "tree_id": "ca5ea1dcfddee632c45959f673e51f934db3d7b0",
          "url": "https://github.com/cocotb/cocotb/commit/bb2be9cd00da651c930dc61daf7adec9dc994903"
        },
        "date": 1708132838614,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09974613934847852,
            "unit": "iter/sec",
            "range": "stddev: 0.1889179116216828",
            "extra": "mean: 10.025450674399996 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2934649896911726,
            "unit": "iter/sec",
            "range": "stddev: 0.037151219307684225",
            "extra": "mean: 3.4075614984000255 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cmarqu42@gmail.com",
            "name": "Colin Marquardt",
            "username": "cmarqu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f9934d679ddd41086ffddf4061f780b60ead30f",
          "message": "Fix docstring links to SimTimeoutError (#3723)",
          "timestamp": "2024-02-19T20:08:58+01:00",
          "tree_id": "55c8660383786591c566c21d61c300cb962bbd57",
          "url": "https://github.com/cocotb/cocotb/commit/0f9934d679ddd41086ffddf4061f780b60ead30f"
        },
        "date": 1708369942060,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10096511555005418,
            "unit": "iter/sec",
            "range": "stddev: 0.04501629659890453",
            "extra": "mean: 9.904410989400025 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.3028771318419832,
            "unit": "iter/sec",
            "range": "stddev: 0.029238127197587668",
            "extra": "mean: 3.301668877799989 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "54447c6629b84339a752fabc7fb41f3a29f71c01",
          "message": "Add more integer parameters to test_package (#3729)",
          "timestamp": "2024-02-22T16:28:15-08:00",
          "tree_id": "50aefa8abd1fab6dcbfcb1049150742db251353e",
          "url": "https://github.com/cocotb/cocotb/commit/54447c6629b84339a752fabc7fb41f3a29f71c01"
        },
        "date": 1708648295680,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10157999702814781,
            "unit": "iter/sec",
            "range": "stddev: 0.058292849324330785",
            "extra": "mean: 9.844457858400016 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.30882880230296067,
            "unit": "iter/sec",
            "range": "stddev: 0.040847793772626935",
            "extra": "mean: 3.2380399514000033 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "e80e560e0adb87130c7eacdcc54942bf542975f5",
          "message": "Update version of NVC used in CI",
          "timestamp": "2024-02-24T09:20:53-06:00",
          "tree_id": "5632a8e5bffa8c5b6c0c43ee3fd7f812d8b9e95c",
          "url": "https://github.com/cocotb/cocotb/commit/e80e560e0adb87130c7eacdcc54942bf542975f5"
        },
        "date": 1708788293530,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10085324300162672,
            "unit": "iter/sec",
            "range": "stddev: 0.11319662601316402",
            "extra": "mean: 9.915397564199997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12047411939126203,
            "unit": "iter/sec",
            "range": "stddev: 0.05012545011066427",
            "extra": "mean: 8.300537949999988 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac4e0112f4aef0ebf5cf4e46fd15ee003f4496ca",
          "message": "Improve `test_multi_dimensional_array` (#3735)\n\n* Run test_multidimensional_array with Icarus\r\n* Only run if above 10.3\r\n* Add additional tests to test_multi_dimension_array",
          "timestamp": "2024-02-24T10:35:03-06:00",
          "tree_id": "d87a8216e340185d26fafa5a5e732f23fc886b23",
          "url": "https://github.com/cocotb/cocotb/commit/ac4e0112f4aef0ebf5cf4e46fd15ee003f4496ca"
        },
        "date": 1708792746681,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1011860230747905,
            "unit": "iter/sec",
            "range": "stddev: 0.029204094052808525",
            "extra": "mean: 9.882787855599991 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12015165712296841,
            "unit": "iter/sec",
            "range": "stddev: 0.06182900198604481",
            "extra": "mean: 8.322814881999978 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6511d5a9e1c49937583479e7ef3ff55465dc06f7",
          "message": "Update pre-commit hooks (#3721)\n\nCo-authored-by: github-actions[bot] <github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-24T10:35:32-06:00",
          "tree_id": "2a7c55093c5d2a5887d79c0fdfb8070823959165",
          "url": "https://github.com/cocotb/cocotb/commit/6511d5a9e1c49937583479e7ef3ff55465dc06f7"
        },
        "date": 1708792780426,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10222582850092937,
            "unit": "iter/sec",
            "range": "stddev: 0.12133513398324386",
            "extra": "mean: 9.782263589000001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12124071232622538,
            "unit": "iter/sec",
            "range": "stddev: 0.07267528494745729",
            "extra": "mean: 8.248054476200002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "6238c512a7cec30a2aaab6583a4554652c4fc3fc",
          "message": "Refactor of the RegressionManager\n\nYes! Again!\n\nfilter_tests is now add_filters which simply register filters with the\nRegressionManager. Additionally, there is a set_mode method which allows\nthe user to set the mode of the RegressionManager. Currently this is\njust used for informing the test initialization logic that we specified\nTESTCASE and want to still run skipped tests. All of this is synthesized\nin the start_regression call.\n\nThe other upshot of doing it this way is that excluded tests appear in\nthe results.xml in order of declaration rather than all pushed towards\nthe beginning.\n\nMore documentation and comments have been added throughout.\n\nThe awkward combination of _start_test, _init_test, and _next_test have\nall been combined into _execute, so it's easier to see the full logic\nbeing applied to each test.\n\nThe sim_failed logic in the callback side of the regression manager has\nbeen piped out so it can work with the new _execute to save some logic.",
          "timestamp": "2024-02-24T14:56:25-06:00",
          "tree_id": "d4065484cac5d91e61517de31aec74f4f6a38108",
          "url": "https://github.com/cocotb/cocotb/commit/6238c512a7cec30a2aaab6583a4554652c4fc3fc"
        },
        "date": 1708808428543,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10039722149842936,
            "unit": "iter/sec",
            "range": "stddev: 0.03205730136789127",
            "extra": "mean: 9.960435010800017 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1192690990241576,
            "unit": "iter/sec",
            "range": "stddev: 0.06440885945922144",
            "extra": "mean: 8.384401392999985 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "393b3284b05a27b4c7e8c0d6635492347a7f03fe",
          "message": "CI: Update pinned Verilator version to latest release (#3739)",
          "timestamp": "2024-02-24T16:02:17-08:00",
          "tree_id": "a51789f02c6cdf243ed96e31ffaf00142cb53020",
          "url": "https://github.com/cocotb/cocotb/commit/393b3284b05a27b4c7e8c0d6635492347a7f03fe"
        },
        "date": 1708819602382,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10061633669175576,
            "unit": "iter/sec",
            "range": "stddev: 0.05376436266934655",
            "extra": "mean: 9.938743874799979 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12121824068211577,
            "unit": "iter/sec",
            "range": "stddev: 0.06075680949860217",
            "extra": "mean: 8.249583514600022 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "78746991+hakan-demirli@users.noreply.github.com",
            "name": "hakan-demirli",
            "username": "hakan-demirli"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e4604cfa64a47312a2927e14399501b56f29174a",
          "message": "Add pre_cmd runner test argument to Questa/Modelsim\n\nCo-authored-by: Vladislav Borshch <borchsh.vn@gmail.com>",
          "timestamp": "2024-02-28T12:31:43-06:00",
          "tree_id": "450a62a2208a053a11e83f19e56b307ea34a9a67",
          "url": "https://github.com/cocotb/cocotb/commit/e4604cfa64a47312a2927e14399501b56f29174a"
        },
        "date": 1709145341025,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1005946915813558,
            "unit": "iter/sec",
            "range": "stddev: 0.0972183511332269",
            "extra": "mean: 9.94088240920001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12037856349702135,
            "unit": "iter/sec",
            "range": "stddev: 0.06464949368462539",
            "extra": "mean: 8.307126875 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "65d102f2fb38b1cc4327bbd0371deee09758442a",
          "message": "Merge pull request #3737 from ktbarrett/split-vpi-cb-1\n\nSplit VpiCbHdl.cpp (with history)",
          "timestamp": "2024-02-28T16:30:39-06:00",
          "tree_id": "1ddc6d849133c5a43df406c0f805a7c01abeed14",
          "url": "https://github.com/cocotb/cocotb/commit/65d102f2fb38b1cc4327bbd0371deee09758442a"
        },
        "date": 1709159687024,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10117603064671511,
            "unit": "iter/sec",
            "range": "stddev: 0.05602114221714485",
            "extra": "mean: 9.88376390740001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12068490826584231,
            "unit": "iter/sec",
            "range": "stddev: 0.08067154885256897",
            "extra": "mean: 8.286040188200001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cmarqu42@gmail.com",
            "name": "Colin Marquardt",
            "username": "cmarqu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a0fbd82bb3005c6fa5063b99053e001f0a367c8",
          "message": "Move extensions page from Reference to Howto (#3750)\n\nCloses #3641",
          "timestamp": "2024-03-01T23:04:24+01:00",
          "tree_id": "645a02acf0cf5ee2801c6214c535e59e1d4e0563",
          "url": "https://github.com/cocotb/cocotb/commit/2a0fbd82bb3005c6fa5063b99053e001f0a367c8"
        },
        "date": 1709330905725,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10034423631524776,
            "unit": "iter/sec",
            "range": "stddev: 0.18222679828587857",
            "extra": "mean: 9.96569446059998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12138862663748733,
            "unit": "iter/sec",
            "range": "stddev: 0.029094855886472645",
            "extra": "mean: 8.238004067600013 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cmarqu42@gmail.com",
            "name": "Colin Marquardt",
            "username": "cmarqu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5aa56087f2123cff6670b5e635670d6cb01d27f4",
          "message": "Move triggers list to Library Reference page (#3752)\n\nCloses #3640",
          "timestamp": "2024-03-01T23:07:04+01:00",
          "tree_id": "81f46ca3ecac03735234fe0a4554aac809b24564",
          "url": "https://github.com/cocotb/cocotb/commit/5aa56087f2123cff6670b5e635670d6cb01d27f4"
        },
        "date": 1709331071471,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10062086276496733,
            "unit": "iter/sec",
            "range": "stddev: 0.05274225753946933",
            "extra": "mean: 9.938296815600006 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11859627016295807,
            "unit": "iter/sec",
            "range": "stddev: 0.09842967739247788",
            "extra": "mean: 8.43196838 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cmarqu42@gmail.com",
            "name": "Colin Marquardt",
            "username": "cmarqu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21f1adc39db198fa5752c8d241d501104d9adf6e",
          "message": "Add lru_cache to want_color_output() (#3753)\n\nCloses #3720",
          "timestamp": "2024-03-01T23:07:47+01:00",
          "tree_id": "a61cff1711567bc9fe591c47cbafe331194bf074",
          "url": "https://github.com/cocotb/cocotb/commit/21f1adc39db198fa5752c8d241d501104d9adf6e"
        },
        "date": 1709331380070,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10114077912830152,
            "unit": "iter/sec",
            "range": "stddev: 0.09869919180583506",
            "extra": "mean: 9.887208785799999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11987281886909049,
            "unit": "iter/sec",
            "range": "stddev: 0.038987540117972855",
            "extra": "mean: 8.342174726799993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cmarqu42@gmail.com",
            "name": "Colin Marquardt",
            "username": "cmarqu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd1b5b4d7e797646874ca1c98c4b227ea67ce591",
          "message": "Add missing `--trace` option to Verilator docs (#3751)\n\nCloses #3687",
          "timestamp": "2024-03-01T23:11:09+01:00",
          "tree_id": "db0e1225f8fa991c039f2c1bc2803371348bd9ca",
          "url": "https://github.com/cocotb/cocotb/commit/cd1b5b4d7e797646874ca1c98c4b227ea67ce591"
        },
        "date": 1709332083780,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10143465899459268,
            "unit": "iter/sec",
            "range": "stddev: 0.06886812877596986",
            "extra": "mean: 9.858563235799988 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12023483972636692,
            "unit": "iter/sec",
            "range": "stddev: 0.045555910964285",
            "extra": "mean: 8.317056872000013 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "98f19f690093ebcf9389a1bb68bb81c4f66ce938",
          "message": "Simplify TestFactory.generate_tests now that parameterize is standalone",
          "timestamp": "2024-03-01T19:51:42-06:00",
          "tree_id": "6f37e4addad81440b0d95f60b00aebab198493e6",
          "url": "https://github.com/cocotb/cocotb/commit/98f19f690093ebcf9389a1bb68bb81c4f66ce938"
        },
        "date": 1709344553360,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10107957780878246,
            "unit": "iter/sec",
            "range": "stddev: 0.035365909528094715",
            "extra": "mean: 9.893195259399999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1215668695847991,
            "unit": "iter/sec",
            "range": "stddev: 0.09177856652020852",
            "extra": "mean: 8.225925397399896 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98c31e425cd7a275a992bad69e84827eb4a6b4b8",
          "message": "Docs: Update Verilator support section for minimum supported version of 5.022 (#3740)",
          "timestamp": "2024-03-03T07:51:53-08:00",
          "tree_id": "4b2f4a1dabbc88a23b396803a86755102e267f22",
          "url": "https://github.com/cocotb/cocotb/commit/98c31e425cd7a275a992bad69e84827eb4a6b4b8"
        },
        "date": 1709481381200,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10046690536695434,
            "unit": "iter/sec",
            "range": "stddev: 0.10504398322007111",
            "extra": "mean: 9.953526450799995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12072639998862902,
            "unit": "iter/sec",
            "range": "stddev: 0.1130011273576987",
            "extra": "mean: 8.283192409399998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "318ec4b2653d479bb0a7b44e3e58eac20fb68bc7",
          "message": "Remove Makefile variables that are cocotb-config calls\n\nThis should increase startup speed. Also the documentation for these\nvariables was removed.",
          "timestamp": "2024-03-06T14:26:17-07:00",
          "tree_id": "9e627ed2fef93ac494747b378a8fcc504c1f6d97",
          "url": "https://github.com/cocotb/cocotb/commit/318ec4b2653d479bb0a7b44e3e58eac20fb68bc7"
        },
        "date": 1709760627742,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10094668767337184,
            "unit": "iter/sec",
            "range": "stddev: 0.10439184724754205",
            "extra": "mean: 9.906219045399984 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12115215681259886,
            "unit": "iter/sec",
            "range": "stddev: 0.04157933043947162",
            "extra": "mean: 8.254083346999959 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9047604b8e811aef8e81e43674f07f5823b8a081",
          "message": "Remove remaining uses of COCOTB_SIM (#3762)",
          "timestamp": "2024-03-09T09:39:02-08:00",
          "tree_id": "7fa5c1f9215232d5c52a4ca09bb969b3a9ded08b",
          "url": "https://github.com/cocotb/cocotb/commit/9047604b8e811aef8e81e43674f07f5823b8a081"
        },
        "date": 1710006188894,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.100665992061923,
            "unit": "iter/sec",
            "range": "stddev: 0.08249381393752017",
            "extra": "mean: 9.933841404800011 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12106649992836879,
            "unit": "iter/sec",
            "range": "stddev: 0.05731280576081368",
            "extra": "mean: 8.2599232702 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "2850d55af8cfdfeca2dd3a3f87f78516c8616fea",
          "message": "Fix logic on deducing direction HierarchyArrayObject",
          "timestamp": "2024-03-09T12:17:42-06:00",
          "tree_id": "0107be4b387cc982796a9ce846deb7b7db181de4",
          "url": "https://github.com/cocotb/cocotb/commit/2850d55af8cfdfeca2dd3a3f87f78516c8616fea"
        },
        "date": 1710008514107,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10071874097754847,
            "unit": "iter/sec",
            "range": "stddev: 0.07204968605777956",
            "extra": "mean: 9.928638804399998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11932858018985047,
            "unit": "iter/sec",
            "range": "stddev: 0.07238167385981402",
            "extra": "mean: 8.38022205919999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "1f0380b3fdc8017062b637a372fb916430f407e5",
          "message": "Remove redundant coverage configuration\n\nThe `run` section is only applied when `coverage run` is used. We are never doing this. Also, the configuration was stale.",
          "timestamp": "2024-03-11T17:18:02-05:00",
          "tree_id": "7becba8fc0f1aab59f2c8c21ca6e04490f8c255f",
          "url": "https://github.com/cocotb/cocotb/commit/1f0380b3fdc8017062b637a372fb916430f407e5"
        },
        "date": 1710195721691,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10095196303563649,
            "unit": "iter/sec",
            "range": "stddev: 0.14341353817244615",
            "extra": "mean: 9.90570138439998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12060308477062671,
            "unit": "iter/sec",
            "range": "stddev: 0.06096781910583962",
            "extra": "mean: 8.291661875000012 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b24ce2936cd1bc3b506eee25cb8554f19d938334",
          "message": "Fixed pre-commit autoupdate (#3771)",
          "timestamp": "2024-03-13T15:22:53-05:00",
          "tree_id": "6ca11a4070eb4ac1d68c89ff0d4a9c637532f860",
          "url": "https://github.com/cocotb/cocotb/commit/b24ce2936cd1bc3b506eee25cb8554f19d938334"
        },
        "date": 1710361629598,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1010911438563355,
            "unit": "iter/sec",
            "range": "stddev: 0.0747076012771012",
            "extra": "mean: 9.892063358400003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11997520753895616,
            "unit": "iter/sec",
            "range": "stddev: 0.09564545589829503",
            "extra": "mean: 8.335055387800002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "3c767afed12aede04551f04550acd488acef621e",
          "message": "CI: Test more Questa and Riviera-PRO versions\n\nIn the previous private CI setup, we ran a number of Questa and\nRiviera-PRO versions in extended tests. Add those same tests to our\nnew CI setup.",
          "timestamp": "2024-03-13T23:36:45+01:00",
          "tree_id": "553c5f4b748663aae5988e02415cd68307efbd21",
          "url": "https://github.com/cocotb/cocotb/commit/3c767afed12aede04551f04550acd488acef621e"
        },
        "date": 1710369657077,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10077569118632614,
            "unit": "iter/sec",
            "range": "stddev: 0.08270161119767008",
            "extra": "mean: 9.923027946799994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1193455511788269,
            "unit": "iter/sec",
            "range": "stddev: 0.03657528179382329",
            "extra": "mean: 8.379030388 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "e1b92e9860b8eb57b3a00204f220433492da0514",
          "message": "CI: Update the codecov GH action to v4\n\nUpdate to the latest version of the codecov GH Action and its uploader.\n\nMost notably, this action now uses nodejs 20 instead of 16, which\nGitHub prominently warns about.\n\nLess notably, this action is a significant rewrite from the previous\nversion, which uses the codecov-cli behind the covers.",
          "timestamp": "2024-03-13T23:41:55+01:00",
          "tree_id": "87b2989237af2a8f632d695efd140c515f23361b",
          "url": "https://github.com/cocotb/cocotb/commit/e1b92e9860b8eb57b3a00204f220433492da0514"
        },
        "date": 1710369957444,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10164325877053805,
            "unit": "iter/sec",
            "range": "stddev: 0.04932953761859574",
            "extra": "mean: 9.838330766800016 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12160648931172141,
            "unit": "iter/sec",
            "range": "stddev: 0.04377676922861514",
            "extra": "mean: 8.223245368400024 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rk.ryan.king@gmail.com",
            "name": "Ryan King",
            "username": "rkryan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "381502c29f084f2f8f9408f856146b5d2801eba9",
          "message": "Add failing testcase for vhdl architecture naming (#3770)\n\nWith Xcelium and a vhdl top level, a design where the top level has an\r\nentity and architecture with the same name will lead to an error:\r\n`VHPI: Not able to map type (vhpiArchBodyK) 1007 to object`. This\r\ntestcase deliberately hits this error.\r\n\r\nThis is detailed in https://github.com/cocotb/cocotb/issues/3769.",
          "timestamp": "2024-03-13T19:09:27-05:00",
          "tree_id": "bcf34af7d54d6a44bd00135139219dfdb766160f",
          "url": "https://github.com/cocotb/cocotb/commit/381502c29f084f2f8f9408f856146b5d2801eba9"
        },
        "date": 1710375465501,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10097264843117067,
            "unit": "iter/sec",
            "range": "stddev: 0.09403667570253432",
            "extra": "mean: 9.903672088799999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11987980530688805,
            "unit": "iter/sec",
            "range": "stddev: 0.02909030034042323",
            "extra": "mean: 8.3416885558 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22ce6d980c69f31e7565ae012d1ba2990ef5f1d8",
          "message": "Small typing cleanup of Task and related functions (#3783)",
          "timestamp": "2024-03-15T19:23:47-07:00",
          "tree_id": "f04f13387f7989182413e09105af19f06ac20575",
          "url": "https://github.com/cocotb/cocotb/commit/22ce6d980c69f31e7565ae012d1ba2990ef5f1d8"
        },
        "date": 1710556068088,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10105108210701032,
            "unit": "iter/sec",
            "range": "stddev: 0.050388595291326166",
            "extra": "mean: 9.8959850716 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11997246223605393,
            "unit": "iter/sec",
            "range": "stddev: 0.11346859059674315",
            "extra": "mean: 8.33524611700002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "0d4f8e051a593bf28192f5f93d584f1f6e275623",
          "message": "Change docstring on cocotb.SIM_NAME",
          "timestamp": "2024-03-17T13:50:09-05:00",
          "tree_id": "c68fb05aee39333b9c629462cfc602ea92c93b53",
          "url": "https://github.com/cocotb/cocotb/commit/0d4f8e051a593bf28192f5f93d584f1f6e275623"
        },
        "date": 1710701681954,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1011445933948198,
            "unit": "iter/sec",
            "range": "stddev: 0.05022955053975652",
            "extra": "mean: 9.886835928999995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1201129562457948,
            "unit": "iter/sec",
            "range": "stddev: 0.0728221216470238",
            "extra": "mean: 8.325496526400002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "961cf4b6e4c880946bfa70c7254d26930bac0b58",
          "message": "Use pre-commit.ci (#3780)\n\nLet's give up trying to make our own pre-commit update action and\r\ninstead use pre-commit.ci.\r\n\r\nDisabling autofixing PRs because we want clean history.",
          "timestamp": "2024-03-18T17:56:53-05:00",
          "tree_id": "c99d1ab8b841151aec6f04e21dbc75bc9fb3e566",
          "url": "https://github.com/cocotb/cocotb/commit/961cf4b6e4c880946bfa70c7254d26930bac0b58"
        },
        "date": 1710802854821,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10089271373182782,
            "unit": "iter/sec",
            "range": "stddev: 0.05351082232490427",
            "extra": "mean: 9.911518513200008 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12063087981738038,
            "unit": "iter/sec",
            "range": "stddev: 0.06781334995745543",
            "extra": "mean: 8.289751359800004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "785e0896930039023db3c2e2be47bed5375326c5",
          "message": "[pre-commit.ci] pre-commit autoupdate (#3784)\n\n* [pre-commit.ci] pre-commit autoupdate\r\n\r\nupdates:\r\n- [github.com/astral-sh/ruff-pre-commit: v0.2.2 → v0.3.3](https://github.com/astral-sh/ruff-pre-commit/compare/v0.2.2...v0.3.3)\r\n- [github.com/pre-commit/mirrors-clang-format: v17.0.6 → v18.1.1](https://github.com/pre-commit/mirrors-clang-format/compare/v17.0.6...v18.1.1)\r\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.02.13 → 2024.03.18](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.02.13...2024.03.18)\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n---------\r\n\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-18T19:00:06-05:00",
          "tree_id": "63d65de57800dc31c141b78fcfe7002cd5ed181c",
          "url": "https://github.com/cocotb/cocotb/commit/785e0896930039023db3c2e2be47bed5375326c5"
        },
        "date": 1710806691608,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1012063490372658,
            "unit": "iter/sec",
            "range": "stddev: 0.11663468257496601",
            "extra": "mean: 9.880803027800004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12098527855744891,
            "unit": "iter/sec",
            "range": "stddev: 0.0540203405622448",
            "extra": "mean: 8.2654684266 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9c026e6a61b5cfe63dada039caf485e9db594149",
          "message": "Cleanup after pre-commit autoupdate (#3786)",
          "timestamp": "2024-03-19T23:32:24-05:00",
          "tree_id": "15fc4d18ce9e64007c908b4a5664d224c6633666",
          "url": "https://github.com/cocotb/cocotb/commit/9c026e6a61b5cfe63dada039caf485e9db594149"
        },
        "date": 1710909397820,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10018994488659551,
            "unit": "iter/sec",
            "range": "stddev: 0.08289317027113628",
            "extra": "mean: 9.981041521999988 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12059451499413601,
            "unit": "iter/sec",
            "range": "stddev: 0.14912592474339734",
            "extra": "mean: 8.292251103200055 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "52ddbfa9dedbf06a2a66810ac761566713ba36f8",
          "message": "Limit setting of CFLAGS to cocotb build only in noxfile",
          "timestamp": "2024-03-20T11:27:23-05:00",
          "tree_id": "2d6f8c9181aa3582775194ad6ba766d6ee163b75",
          "url": "https://github.com/cocotb/cocotb/commit/52ddbfa9dedbf06a2a66810ac761566713ba36f8"
        },
        "date": 1710952294084,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10066725596791076,
            "unit": "iter/sec",
            "range": "stddev: 0.030450761014607367",
            "extra": "mean: 9.933716682600004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1204882004891474,
            "unit": "iter/sec",
            "range": "stddev: 0.06132511396259728",
            "extra": "mean: 8.299567890799995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "3782fb2bcd5e7d75754a017a89002e012a0f6083",
          "message": "Update gcovr comment in noxfile",
          "timestamp": "2024-03-20T18:52:08+01:00",
          "tree_id": "26716ab3e6169f98e85ca9d154e3a4ff94597ac6",
          "url": "https://github.com/cocotb/cocotb/commit/3782fb2bcd5e7d75754a017a89002e012a0f6083"
        },
        "date": 1710957373296,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10126832553892412,
            "unit": "iter/sec",
            "range": "stddev: 0.04927539061672675",
            "extra": "mean: 9.874755948400013 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12099043284130248,
            "unit": "iter/sec",
            "range": "stddev: 0.05928736191489483",
            "extra": "mean: 8.265116311400039 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "722042df40818b1d624abd434e58d6bb4c280190",
          "message": "Update test_package_access",
          "timestamp": "2024-03-20T12:56:54-05:00",
          "tree_id": "a47a46861d86206825824175d6d0e95858a00d80",
          "url": "https://github.com/cocotb/cocotb/commit/722042df40818b1d624abd434e58d6bb4c280190"
        },
        "date": 1710957667923,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10183329723088011,
            "unit": "iter/sec",
            "range": "stddev: 0.0887945737224606",
            "extra": "mean: 9.819970748200012 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12029874540516589,
            "unit": "iter/sec",
            "range": "stddev: 0.07927966682943259",
            "extra": "mean: 8.312638645000016 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anolte512@gmail.com",
            "name": "Andrew Nolte",
            "username": "AndrewNolte"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5434dc2bcd2d6168421c833c6fe77c13645620b7",
          "message": "[Vpi] test_discovery scope tests (#3782)\n\nCo-authored-by: Andrew Nolte <anolte@hudson-trading.com>",
          "timestamp": "2024-03-21T00:46:46-05:00",
          "tree_id": "65827aefb43446bd7f457ca346963e1e8f4bd826",
          "url": "https://github.com/cocotb/cocotb/commit/5434dc2bcd2d6168421c833c6fe77c13645620b7"
        },
        "date": 1711000241602,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1013375175915383,
            "unit": "iter/sec",
            "range": "stddev: 0.058537035758767154",
            "extra": "mean: 9.86801358240001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12042622869967944,
            "unit": "iter/sec",
            "range": "stddev: 0.048072669033190255",
            "extra": "mean: 8.303838879600004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rk.ryan.king@gmail.com",
            "name": "Ryan King",
            "username": "rkryan"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "30b769a55652fbf6ac34f2cbd6c472b9af48aa6d",
          "message": "Integrate combine_results into cocotb_tools\n\nThis removes the last script from the standalone bin directory,\npreferring instead to deliver this functionality as part of the\ncocotb_tools package. As all usage of this is internal to the cocotb\nrepository, no console_scripts entry is added for this.\n\n`python -m cocotb_tools.combine_results` is a drop-in replacement for\n`combine_results.py`.",
          "timestamp": "2024-03-21T13:43:49-05:00",
          "tree_id": "020915d7217286661628bbb93e3c03f2deb6a170",
          "url": "https://github.com/cocotb/cocotb/commit/30b769a55652fbf6ac34f2cbd6c472b9af48aa6d"
        },
        "date": 1711046870017,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10123128980156369,
            "unit": "iter/sec",
            "range": "stddev: 0.05510179709787954",
            "extra": "mean: 9.87836865419997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12090435005016559,
            "unit": "iter/sec",
            "range": "stddev: 0.059688062923852044",
            "extra": "mean: 8.27100099859997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5ab5431bfce09f200ef0fc02080bedd36d8916e0",
          "message": "VHPI: Improve get_root_handle() (#3774)\n\nWhen a name is passed in, it is first used as a check on the object names.\r\n\r\nFirst, vhpiRootInst is used. If its name fails the check, we attempt to get\r\nthe entity associated with the rootInst, and check the entity name.\r\n\r\nIf both of those checks fail, we search for a handle using the passed in name.\r\nIf the passed in name does not start with ':', it is added to the beginning so that\r\nthe search uses the FullName of the instantiated object, rather than the more\r\nambiguous name that may match objects in the library information model.\r\n\r\nThis change moves the lookup by name to the last fallback, so that the name acts first\r\nas a check, which matches VPI and FLI implementations.\r\n\r\nAlso modify issue_3769 test to expect it to pass on Xcelium.",
          "timestamp": "2024-03-21T17:49:08-07:00",
          "tree_id": "726a899e01863d9efc0651c3ffae9959c4899ffd",
          "url": "https://github.com/cocotb/cocotb/commit/5ab5431bfce09f200ef0fc02080bedd36d8916e0"
        },
        "date": 1711068947412,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10133988572312891,
            "unit": "iter/sec",
            "range": "stddev: 0.025410632115636916",
            "extra": "mean: 9.867782984600002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12124275406541403,
            "unit": "iter/sec",
            "range": "stddev: 0.061721901654172816",
            "extra": "mean: 8.247915578200002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cmarqu42@gmail.com",
            "name": "Colin Marquardt",
            "username": "cmarqu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2fb4e2a4f979a01656c175ebcfada5db36efe14",
          "message": "Fix small doc linking problems (#3800)",
          "timestamp": "2024-03-22T07:14:54+01:00",
          "tree_id": "22bbddb8706778eba70b1e34ac2bb4db78bb2531",
          "url": "https://github.com/cocotb/cocotb/commit/f2fb4e2a4f979a01656c175ebcfada5db36efe14"
        },
        "date": 1711088332961,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10164128128904708,
            "unit": "iter/sec",
            "range": "stddev: 0.037485739080440277",
            "extra": "mean: 9.8385221764 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12096167183589243,
            "unit": "iter/sec",
            "range": "stddev: 0.07092735502008676",
            "extra": "mean: 8.267081504599991 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cmarqu42@gmail.com",
            "name": "Colin Marquardt",
            "username": "cmarqu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a0acd44cd930dc42d6dd6edf960134dd17c7d041",
          "message": "Remove leftover trace of MEMCHECK envvar (#3799)\n\nSupport has been removed in #3543",
          "timestamp": "2024-03-22T07:54:53+01:00",
          "tree_id": "30be3b4aaff6a2c60e9cef142c500cf21283a248",
          "url": "https://github.com/cocotb/cocotb/commit/a0acd44cd930dc42d6dd6edf960134dd17c7d041"
        },
        "date": 1711090740941,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10060085123354333,
            "unit": "iter/sec",
            "range": "stddev: 0.06732073577134759",
            "extra": "mean: 9.940273742600004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11967438132482122,
            "unit": "iter/sec",
            "range": "stddev: 0.029801707823461168",
            "extra": "mean: 8.356007266799997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7414f1c3e7ce35418b64f64bb596b3f065fa7df3",
          "message": "Improve combine_results script (#3803)\n\n* Allow multiple directories to be provided to script to search for\r\n  results.xml files.\r\n* Removed --suppress-rc, just use the shell to ignore the return code if\r\n  desired.\r\n* Typing and public API cleanup.\r\n* Cleanup configuration of ArgumentParser.\r\n* Add newsfragment.\r\n* Add --input-filename option to specify the input filename.\r\n* Renamed --testsuites-name to --output-testsuites-name for clarity\r\n* Added -i and -o aliases for --input-filename and --output-file",
          "timestamp": "2024-03-24T18:05:54-05:00",
          "tree_id": "3554be2e41aa6309450e5c22cf15a2643b58e333",
          "url": "https://github.com/cocotb/cocotb/commit/7414f1c3e7ce35418b64f64bb596b3f065fa7df3"
        },
        "date": 1711321796306,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10067752212487305,
            "unit": "iter/sec",
            "range": "stddev: 0.11886599747707269",
            "extra": "mean: 9.932703734599993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1202199915791709,
            "unit": "iter/sec",
            "range": "stddev: 0.04829326110162401",
            "extra": "mean: 8.318084096200005 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "",
            "name": "ruff"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "80a80ed6f73e3572889da3d4ed1f1d9580e948bf",
          "message": "ruff-format",
          "timestamp": "2024-03-24T19:00:42-05:00",
          "tree_id": "cd1871b9827bb6ab581e2c1b0e7a50119a3e7626",
          "url": "https://github.com/cocotb/cocotb/commit/80a80ed6f73e3572889da3d4ed1f1d9580e948bf"
        },
        "date": 1711325104068,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09613899061095996,
            "unit": "iter/sec",
            "range": "stddev: 0.07152808280537842",
            "extra": "mean: 10.401607023799965 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1154939069009126,
            "unit": "iter/sec",
            "range": "stddev: 0.060420070687902075",
            "extra": "mean: 8.658465427599959 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51a489f181e38e2b4b64725ce684e0dc805a6ece",
          "message": "Improve cocotb-config script (#3804)\n\n* Make things private besides\r\n   * directories\r\n   * lib_name\r\n   * lib_name_path\r\n   * main\r\n* Reword documentation\r\n* Use mutually exclusive group for options\r\n* Remove unused -v alias for --version\r\n* Refactor to not use custom actions\r\n* Make lib_name_path return a Path instead of a as_posix string\r\n* Remove unused --prefix option\r\n\r\nThe things remaining public are used by other parts of cocotb and are\r\nnot available in any other way.\r\n\r\nThe refactor to not use custom actions leads to better generated\r\ndocumentation with sphinx_argparse_cli.",
          "timestamp": "2024-03-24T20:25:59-05:00",
          "tree_id": "957298fe87a1a352d2fda5891bf0a4b90c941db5",
          "url": "https://github.com/cocotb/cocotb/commit/51a489f181e38e2b4b64725ce684e0dc805a6ece"
        },
        "date": 1711330212238,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10112721151018363,
            "unit": "iter/sec",
            "range": "stddev: 0.06085969828450944",
            "extra": "mean: 9.888535292000006 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12084659030207417,
            "unit": "iter/sec",
            "range": "stddev: 0.07719928472964803",
            "extra": "mean: 8.274954200200023 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "ab72bf7094b948365719ca3d38cb6f3aa28c2a84",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.3.3 → v0.3.4](https://github.com/astral-sh/ruff-pre-commit/compare/v0.3.3...v0.3.4)\n- [github.com/pre-commit/mirrors-clang-format: v18.1.1 → v18.1.2](https://github.com/pre-commit/mirrors-clang-format/compare/v18.1.1...v18.1.2)\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.03.18 → 2024.03.25](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.03.18...2024.03.25)",
          "timestamp": "2024-03-25T22:08:35-05:00",
          "tree_id": "8bd6c66ff58f1c6956d3f45a6748c7e04cc54687",
          "url": "https://github.com/cocotb/cocotb/commit/ab72bf7094b948365719ca3d38cb6f3aa28c2a84"
        },
        "date": 1711422751628,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10155915905864803,
            "unit": "iter/sec",
            "range": "stddev: 0.047164356323202025",
            "extra": "mean: 9.846477750199995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12002301229059992,
            "unit": "iter/sec",
            "range": "stddev: 0.048645668622385424",
            "extra": "mean: 8.331735563999995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "ea53fb0a793f63479e9b77b90751a30d8a20402f",
          "message": "Move documentation of cocotb.config",
          "timestamp": "2024-03-26T12:00:58-05:00",
          "tree_id": "a455fdf84b927c63212812cd7238a5c399225fe5",
          "url": "https://github.com/cocotb/cocotb/commit/ea53fb0a793f63479e9b77b90751a30d8a20402f"
        },
        "date": 1711472710041,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1000342842220504,
            "unit": "iter/sec",
            "range": "stddev: 0.13546896396302224",
            "extra": "mean: 9.9965727528 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11929635724696487,
            "unit": "iter/sec",
            "range": "stddev: 0.045439118854008864",
            "extra": "mean: 8.382485627200003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4be76688dd0d06e29bff9036f719f050fb7f2e05",
          "message": "doc: Various fixes and cleanup (#3802)\n\n* Remove leftover reference to cocotb.types.concat()\r\n* Add cocotb.logging module to Global Module Index and fix newsfragment link to it\r\n* Add cocotb.log default Logger\r\n* Add missing synopses for cocotb modules\r\n* Clean up various function/method docstrings\r\n* Clean up various newsfragments and release notes",
          "timestamp": "2024-03-28T09:39:46-07:00",
          "tree_id": "cc9bb4333ff60544b9ca7895534660abf35c0458",
          "url": "https://github.com/cocotb/cocotb/commit/4be76688dd0d06e29bff9036f719f050fb7f2e05"
        },
        "date": 1711644240169,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10134609685547423,
            "unit": "iter/sec",
            "range": "stddev: 0.07000901345343735",
            "extra": "mean: 9.867178224200007 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12027963970857833,
            "unit": "iter/sec",
            "range": "stddev: 0.09734343894528469",
            "extra": "mean: 8.313959057600005 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c01a407964643a446bacd7f1bd6162e93787cd0",
          "message": "VPI: Use iteration fallback when looking for vpiGenScope by name (#3817)\n\nLike Icarus Verilog, Verilator does not support vpiGenScopeArray,\r\nbut vpiGenScope support has been added. Add the fallback for all simulators.\r\n\r\nWhen looking up a vpiGenScopeArray handle by name, iterate over parent handle\r\nto check if a vpiGenScope object exists with the right generate label\r\nbefore the index.\r\nIf it does, create the pseudo-region representing the vpiGenScopeArray.\r\n\r\nThis change also allows Questa to find generate scopes,\r\nso update test_discovery for the now-passing tests.",
          "timestamp": "2024-03-29T22:12:11-07:00",
          "tree_id": "e1b7a6d21fc9d923a9bd3b92d45c68eb0f9713f0",
          "url": "https://github.com/cocotb/cocotb/commit/5c01a407964643a446bacd7f1bd6162e93787cd0"
        },
        "date": 1711775766743,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1010722309680597,
            "unit": "iter/sec",
            "range": "stddev: 0.05911064888120608",
            "extra": "mean: 9.893914385999995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12160017078687571,
            "unit": "iter/sec",
            "range": "stddev: 0.035113923085964116",
            "extra": "mean: 8.223672660399995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "19d11b91a0598000bcd932897299d2337b3dac51",
          "message": "Remove check if Questa GPI backends are built (#3818)\n\nThis is leftover from when FLI was only optionally built. It is now always built.",
          "timestamp": "2024-03-30T09:01:07-06:00",
          "tree_id": "44ac8d5d38c80b9fdac2ddf028e6d1882f8c1bd4",
          "url": "https://github.com/cocotb/cocotb/commit/19d11b91a0598000bcd932897299d2337b3dac51"
        },
        "date": 1711811115573,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10074275157298726,
            "unit": "iter/sec",
            "range": "stddev: 0.11626935614276065",
            "extra": "mean: 9.926272455200001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12079252216051009,
            "unit": "iter/sec",
            "range": "stddev: 0.055335441820903795",
            "extra": "mean: 8.278658166199989 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "53a5f5e41f3f4b22f4b5adcf14fa197faf54a19b",
          "message": "[pre-commit.ci] pre-commit autoupdate (#3819)\n\nupdates:\r\n- [github.com/astral-sh/ruff-pre-commit: v0.3.4 → v0.3.5](https://github.com/astral-sh/ruff-pre-commit/compare/v0.3.4...v0.3.5)\r\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.03.25 → 2024.04.01](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.03.25...2024.04.01)\r\n\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>",
          "timestamp": "2024-04-01T19:29:43-06:00",
          "tree_id": "bca9696407262e8f86ca2f0ba95aa3309bb6eff4",
          "url": "https://github.com/cocotb/cocotb/commit/53a5f5e41f3f4b22f4b5adcf14fa197faf54a19b"
        },
        "date": 1712021638284,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10174851237787713,
            "unit": "iter/sec",
            "range": "stddev: 0.040476168827984584",
            "extra": "mean: 9.82815351920002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12024122220014309,
            "unit": "iter/sec",
            "range": "stddev: 0.02603141998485153",
            "extra": "mean: 8.316615397799989 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7e4d43b570e6627a06e696656941427308e90b1",
          "message": "Cleanup LogicArray interface (#3792)\n\n* Deprecate LogicArray.integer, .signed_integer, and .binstr\r\n* Deprecate constructing LogicArray from ints.\r\n* Introduce LogicArray.from_unsigned, from_signed, to_signed, and\r\n  to_unsigned to replace what was deprecated.\r\n* Cleanup usage of .integer, .signed_integer, and .binstr in regression\r\n* Change exception used value doesn't fit in range",
          "timestamp": "2024-04-07T12:20:44-06:00",
          "tree_id": "dc77840e23e19faacc0414587d415aad23967b56",
          "url": "https://github.com/cocotb/cocotb/commit/e7e4d43b570e6627a06e696656941427308e90b1"
        },
        "date": 1712514287926,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10022129440683226,
            "unit": "iter/sec",
            "range": "stddev: 0.020695895240624106",
            "extra": "mean: 9.977919422399998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11839789856467778,
            "unit": "iter/sec",
            "range": "stddev: 0.11103912173858307",
            "extra": "mean: 8.446095852399992 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9c97de502d877dcffd91fac53b41ea600e1f569d",
          "message": "Improve force/release tests (#3828)",
          "timestamp": "2024-04-09T06:52:46-06:00",
          "tree_id": "8dfec1a231802add798ce4ed4a0ae93038bcc8c5",
          "url": "https://github.com/cocotb/cocotb/commit/9c97de502d877dcffd91fac53b41ea600e1f569d"
        },
        "date": 1712667415250,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09931084218483154,
            "unit": "iter/sec",
            "range": "stddev: 0.06863442983195789",
            "extra": "mean: 10.069394015799991 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11794412429253752,
            "unit": "iter/sec",
            "range": "stddev: 0.09583802631489875",
            "extra": "mean: 8.478591078600015 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "001b2a1e019601f28a2410cdf773afce5b2a439c",
          "message": "[pre-commit.ci] pre-commit autoupdate (#3834)\n\nupdates:\r\n- [github.com/pre-commit/mirrors-clang-format: v18.1.2 → v18.1.3](https://github.com/pre-commit/mirrors-clang-format/compare/v18.1.2...v18.1.3)\r\n- [github.com/pre-commit/pre-commit-hooks: v4.5.0 → v4.6.0](https://github.com/pre-commit/pre-commit-hooks/compare/v4.5.0...v4.6.0)\r\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.04.01 → 2024.04.08](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.04.01...2024.04.08)\r\n\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>",
          "timestamp": "2024-04-09T06:53:16-06:00",
          "tree_id": "51c75e86c3c1c576203d7863bfdefe2750ed0a17",
          "url": "https://github.com/cocotb/cocotb/commit/001b2a1e019601f28a2410cdf773afce5b2a439c"
        },
        "date": 1712667689936,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09963250081807853,
            "unit": "iter/sec",
            "range": "stddev: 0.10600595538718093",
            "extra": "mean: 10.036885471999994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11888351324512297,
            "unit": "iter/sec",
            "range": "stddev: 0.02466711049333554",
            "extra": "mean: 8.411595289400008 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e786e02a935758e2712c17067bc5a130bd1f7163",
          "message": "Introduce language-agnostic \"sources\" arg to runner (#3796)",
          "timestamp": "2024-04-09T19:27:41-06:00",
          "tree_id": "40ced853f008202712558e885c489c4eb5986839",
          "url": "https://github.com/cocotb/cocotb/commit/e786e02a935758e2712c17067bc5a130bd1f7163"
        },
        "date": 1712712713475,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10041145776962913,
            "unit": "iter/sec",
            "range": "stddev: 0.04744116388259414",
            "extra": "mean: 9.959022826799991 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11787490296217927,
            "unit": "iter/sec",
            "range": "stddev: 0.11234504109523423",
            "extra": "mean: 8.483570080400023 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "39fbb9169a7588681757ecdc27230f2ff1c7aadc",
          "message": "Deprecate cocotb.runner.Simulator.build verilog_sources and vhdl_sources (#3836)\n\nReplaced with *sources* parameter.",
          "timestamp": "2024-04-10T10:09:07-06:00",
          "tree_id": "31e0892447e2f30cd0f539a6eb3dd8333308f069",
          "url": "https://github.com/cocotb/cocotb/commit/39fbb9169a7588681757ecdc27230f2ff1c7aadc"
        },
        "date": 1712765597218,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09973547617838008,
            "unit": "iter/sec",
            "range": "stddev: 0.15427138576654437",
            "extra": "mean: 10.026522540599979 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11831676266580264,
            "unit": "iter/sec",
            "range": "stddev: 0.07259467787803511",
            "extra": "mean: 8.451887775399996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6bb8f35162b2a33989c9fe504263e18a6a178618",
          "message": "Document CI test generation (#3838)",
          "timestamp": "2024-04-11T00:03:25-06:00",
          "tree_id": "f1ffa7bcd0f008000df17af5ef2b2fe1dde58b00",
          "url": "https://github.com/cocotb/cocotb/commit/6bb8f35162b2a33989c9fe504263e18a6a178618"
        },
        "date": 1712815673761,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09928599101686232,
            "unit": "iter/sec",
            "range": "stddev: 0.11893276085417069",
            "extra": "mean: 10.071914373400011 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11804539358833703,
            "unit": "iter/sec",
            "range": "stddev: 0.09957183015023477",
            "extra": "mean: 8.47131742800001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "165f6c2ea72036f3527a8a923fd071416d9f79bb",
          "message": "Introduce new COCOTB_TEST_FILTER variable (#3841)",
          "timestamp": "2024-04-15T12:56:49-04:00",
          "tree_id": "05736e5f887f39126151da7672e46496428ee7d7",
          "url": "https://github.com/cocotb/cocotb/commit/165f6c2ea72036f3527a8a923fd071416d9f79bb"
        },
        "date": 1713200464229,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09939877340241325,
            "unit": "iter/sec",
            "range": "stddev: 0.04029883758705672",
            "extra": "mean: 10.060486319600011 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11732500244545722,
            "unit": "iter/sec",
            "range": "stddev: 0.09713820005339366",
            "extra": "mean: 8.523332445400001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "38e0c245d4850199c715941a95bfddb601578028",
          "message": "[pre-commit.ci] pre-commit autoupdate (#3842)\n\nupdates:\r\n- [github.com/astral-sh/ruff-pre-commit: v0.3.5 → v0.3.7](https://github.com/astral-sh/ruff-pre-commit/compare/v0.3.5...v0.3.7)\r\n\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>",
          "timestamp": "2024-04-15T22:41:30-04:00",
          "tree_id": "32845be9a268a906cd35217071e3eec7b7e998a0",
          "url": "https://github.com/cocotb/cocotb/commit/38e0c245d4850199c715941a95bfddb601578028"
        },
        "date": 1713235540961,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09993176304861,
            "unit": "iter/sec",
            "range": "stddev: 0.0683099555166086",
            "extra": "mean: 10.006828354600009 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11800758777276521,
            "unit": "iter/sec",
            "range": "stddev: 0.08730896025779804",
            "extra": "mean: 8.474031364200027 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cmarqu42@gmail.com",
            "name": "Colin Marquardt",
            "username": "cmarqu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ccbdd935ce2aa0d98052f8b8f8a21c849b5c40c6",
          "message": "Use latest release ghdl 4.1.0 (#3843)\n\nhttps://github.com/ghdl/ghdl/releases/tag/v4.1.0",
          "timestamp": "2024-04-16T14:33:53+02:00",
          "tree_id": "748969a920e54804ceea0c33c68569aa03e6dbfd",
          "url": "https://github.com/cocotb/cocotb/commit/ccbdd935ce2aa0d98052f8b8f8a21c849b5c40c6"
        },
        "date": 1713271076261,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09978997932117854,
            "unit": "iter/sec",
            "range": "stddev: 0.10519875576213081",
            "extra": "mean: 10.021046269400006 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11883414619094698,
            "unit": "iter/sec",
            "range": "stddev: 0.049020673777686916",
            "extra": "mean: 8.415089703199987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "d4b8f669f73669721ff48dec0212ad5227ff3bf0",
          "message": "Make Verilator happy",
          "timestamp": "2024-04-21T09:42:33-04:00",
          "tree_id": "2ea27b48a9b3099fd109846dec42d21812ebd1b2",
          "url": "https://github.com/cocotb/cocotb/commit/d4b8f669f73669721ff48dec0212ad5227ff3bf0"
        },
        "date": 1713707223491,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09971866388714186,
            "unit": "iter/sec",
            "range": "stddev: 0.06086246221284561",
            "extra": "mean: 10.028212984600009 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11867653355699508,
            "unit": "iter/sec",
            "range": "stddev: 0.05200567864607668",
            "extra": "mean: 8.426265665400013 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "06126ddad4c5253b24aeb32a1a70e30f365eb054",
          "message": "Make ANSI module private",
          "timestamp": "2024-04-21T13:50:18-04:00",
          "tree_id": "a948033df7af857b71adc40e7e1f9a575ebd8ffe",
          "url": "https://github.com/cocotb/cocotb/commit/06126ddad4c5253b24aeb32a1a70e30f365eb054"
        },
        "date": 1713722075029,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1001029927018292,
            "unit": "iter/sec",
            "range": "stddev: 0.0441891854130283",
            "extra": "mean: 9.989711326400004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11869792037716961,
            "unit": "iter/sec",
            "range": "stddev: 0.04070502558624582",
            "extra": "mean: 8.424747433000016 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9b59e19ae38127879b073b0b1c8a73a74c5e4b3f",
          "message": "Verilator: Use latest release in CI, add minimum supported version to extended tests (#3827)",
          "timestamp": "2024-04-21T12:21:27-06:00",
          "tree_id": "1022993916561f5cc5114fecdc44ed310e35e599",
          "url": "https://github.com/cocotb/cocotb/commit/9b59e19ae38127879b073b0b1c8a73a74c5e4b3f"
        },
        "date": 1713723975630,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.0991998483981888,
            "unit": "iter/sec",
            "range": "stddev: 0.11142495684029727",
            "extra": "mean: 10.080660567 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11801197314774611,
            "unit": "iter/sec",
            "range": "stddev: 0.0165771478077648",
            "extra": "mean: 8.473716465599988 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anolte512@gmail.com",
            "name": "Andrew Nolte",
            "username": "AndrewNolte"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e6c6a3620b56bba4feef06b63a29cf010f56463",
          "message": "Support interface arrays in Verilator (#3824)\n\nCo-authored-by: Andrew Nolte <anolte@hudson-trading.com>",
          "timestamp": "2024-04-21T13:11:51-06:00",
          "tree_id": "a1893640fd51ae40aab9bb2a6c9f9f8fd430f7f7",
          "url": "https://github.com/cocotb/cocotb/commit/6e6c6a3620b56bba4feef06b63a29cf010f56463"
        },
        "date": 1713726957413,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10040171066606518,
            "unit": "iter/sec",
            "range": "stddev: 0.07320545327702675",
            "extra": "mean: 9.959989659200005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11897771175260899,
            "unit": "iter/sec",
            "range": "stddev: 0.09152824253436061",
            "extra": "mean: 8.404935556999998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "96035d9f74180fa52e6cd1bf09f4dd60b4297f69",
          "message": "Better error messages if the makefile fails (#3853)",
          "timestamp": "2024-04-21T16:56:23-04:00",
          "tree_id": "7d721df358d556ed73fca9e9fac6c88d0830661a",
          "url": "https://github.com/cocotb/cocotb/commit/96035d9f74180fa52e6cd1bf09f4dd60b4297f69"
        },
        "date": 1713733229688,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09995136747872922,
            "unit": "iter/sec",
            "range": "stddev: 0.061212943617433124",
            "extra": "mean: 10.00486561839998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11688756984989017,
            "unit": "iter/sec",
            "range": "stddev: 0.13950700923337578",
            "extra": "mean: 8.555229621800027 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "248b95c5ad4074539ece038fc07632b5f634708a",
          "message": "Update version of macOS to use in CI\n\nMac OS X version 11 was deprecated November 2023 and Github is removing\nthe runners in June 2024.",
          "timestamp": "2024-04-22T07:33:35-04:00",
          "tree_id": "24dd7f041b6519bdb6a00cfd88d116fa2d4c5142",
          "url": "https://github.com/cocotb/cocotb/commit/248b95c5ad4074539ece038fc07632b5f634708a"
        },
        "date": 1713785858300,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1007418957754999,
            "unit": "iter/sec",
            "range": "stddev: 0.09121726146243611",
            "extra": "mean: 9.926356778400002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11873984067622669,
            "unit": "iter/sec",
            "range": "stddev: 0.1003976657046529",
            "extra": "mean: 8.421773132800013 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "698866342b66de0adbf79535c184670188ff0341",
          "message": "[pre-commit.ci] pre-commit autoupdate (#3859)\n\n* [pre-commit.ci] pre-commit autoupdate\r\n\r\nupdates:\r\n- [github.com/astral-sh/ruff-pre-commit: v0.3.7 → v0.4.1](https://github.com/astral-sh/ruff-pre-commit/compare/v0.3.7...v0.4.1)\r\n- [github.com/pre-commit/mirrors-clang-format: v18.1.3 → v18.1.4](https://github.com/pre-commit/mirrors-clang-format/compare/v18.1.3...v18.1.4)\r\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.04.08 → 2024.04.20](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.04.08...2024.04.20)\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n---------\r\n\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>",
          "timestamp": "2024-04-25T16:51:42-04:00",
          "tree_id": "537958abc0c76e22eb39e9f6ba111b1634b6cb89",
          "url": "https://github.com/cocotb/cocotb/commit/698866342b66de0adbf79535c184670188ff0341"
        },
        "date": 1714078544691,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10026794100535161,
            "unit": "iter/sec",
            "range": "stddev: 0.04369487261422009",
            "extra": "mean: 9.973277499999995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11803226466499697,
            "unit": "iter/sec",
            "range": "stddev: 0.07393138930864636",
            "extra": "mean: 8.472259706599994 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "c81f13f5d2e56a135377fdd5513a7abb9c46af81",
          "message": "Better document cocotb.result",
          "timestamp": "2024-04-30T08:40:59-06:00",
          "tree_id": "d7c773d923456f2004bc7b499cf47a6e20eeb3dd",
          "url": "https://github.com/cocotb/cocotb/commit/c81f13f5d2e56a135377fdd5513a7abb9c46af81"
        },
        "date": 1714488304232,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.099941224709663,
            "unit": "iter/sec",
            "range": "stddev: 0.015671874958060238",
            "extra": "mean: 10.005880985600061 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11864164039628941,
            "unit": "iter/sec",
            "range": "stddev: 0.07874108158410685",
            "extra": "mean: 8.42874387659997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ed010083689db23a11c4d7780e6af3cdcf15665d",
          "message": "CI: Add pre-commit hook to display git diff after running other steps (#3869)",
          "timestamp": "2024-04-30T09:11:00-07:00",
          "tree_id": "6f709cea5da4c174058d17aa4c028f477b7bec70",
          "url": "https://github.com/cocotb/cocotb/commit/ed010083689db23a11c4d7780e6af3cdcf15665d"
        },
        "date": 1714493971095,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10031168449170358,
            "unit": "iter/sec",
            "range": "stddev: 0.042553066729081844",
            "extra": "mean: 9.96892839620001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11861189587025364,
            "unit": "iter/sec",
            "range": "stddev: 0.06168503581608881",
            "extra": "mean: 8.430857568399995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "corrin.meyer@dornerworks.com",
            "name": "Corrin Meyer"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "9e47d04791ca61096d68ab3c68a27277756f7ec0",
          "message": "Fix pre-commit errors",
          "timestamp": "2024-05-01T08:54:15-06:00",
          "tree_id": "83369afbf755c1619ff72039578522c15627a814",
          "url": "https://github.com/cocotb/cocotb/commit/9e47d04791ca61096d68ab3c68a27277756f7ec0"
        },
        "date": 1714575499784,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09925532878267726,
            "unit": "iter/sec",
            "range": "stddev: 0.06507295098445127",
            "extra": "mean: 10.075025817400013 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11835951760403135,
            "unit": "iter/sec",
            "range": "stddev: 0.0734998882654469",
            "extra": "mean: 8.448834705000014 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "102625f3b45e501bb498ce46289c5f5c2c61c3ae",
          "message": "[pre-commit.ci] pre-commit check --fix --unsafe-fixes",
          "timestamp": "2024-05-03T00:38:27-06:00",
          "tree_id": "7ad3ea39bb16be7be68ad50dfdef38178db6136a",
          "url": "https://github.com/cocotb/cocotb/commit/102625f3b45e501bb498ce46289c5f5c2c61c3ae"
        },
        "date": 1714718549447,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10073441081004106,
            "unit": "iter/sec",
            "range": "stddev: 0.18341007209808285",
            "extra": "mean: 9.927094346 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11949853899720352,
            "unit": "iter/sec",
            "range": "stddev: 0.03486913198492496",
            "extra": "mean: 8.368303147400002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "683194d22c1b4969f5ed88fe7c607009b38254a7",
          "message": "Add libpython package to normal installation instructions (#3879)",
          "timestamp": "2024-05-05T09:00:30-06:00",
          "tree_id": "65295df7ef91cc2ca3dd0d84f43a838b4e5ec7ac",
          "url": "https://github.com/cocotb/cocotb/commit/683194d22c1b4969f5ed88fe7c607009b38254a7"
        },
        "date": 1714921482617,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10064800130616987,
            "unit": "iter/sec",
            "range": "stddev: 0.06508390565026952",
            "extra": "mean: 9.935617071599996 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11791021229464106,
            "unit": "iter/sec",
            "range": "stddev: 0.1292806217255596",
            "extra": "mean: 8.481029594799987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "b06cd23f7523b24a63d617fba6776133cb5632c3",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.4.2 → v0.4.3](https://github.com/astral-sh/ruff-pre-commit/compare/v0.4.2...v0.4.3)",
          "timestamp": "2024-05-07T09:34:40-06:00",
          "tree_id": "0ff5c35ba928891a46ef841ca31cce6c536e3dd4",
          "url": "https://github.com/cocotb/cocotb/commit/b06cd23f7523b24a63d617fba6776133cb5632c3"
        },
        "date": 1715096335734,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10002033407790661,
            "unit": "iter/sec",
            "range": "stddev: 0.058892436206884405",
            "extra": "mean: 9.997967005600003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11977942042870349,
            "unit": "iter/sec",
            "range": "stddev: 0.057362209450098144",
            "extra": "mean: 8.348679568000012 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anolte512@gmail.com",
            "name": "Andrew Nolte",
            "username": "AndrewNolte"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "17038c0ff372423f64282146a90c8d73cf021b8d",
          "message": "Conditional scope negative test case (#3860)",
          "timestamp": "2024-05-08T12:24:58-06:00",
          "tree_id": "2e4dc5b60eafd45750f12e4fde3c129095546736",
          "url": "https://github.com/cocotb/cocotb/commit/17038c0ff372423f64282146a90c8d73cf021b8d"
        },
        "date": 1715192967240,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10013792796720689,
            "unit": "iter/sec",
            "range": "stddev: 0.056122661545505347",
            "extra": "mean: 9.986226201200003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11829242230233925,
            "unit": "iter/sec",
            "range": "stddev: 0.08653420104173805",
            "extra": "mean: 8.453626872599978 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "6c42eef3673b477be974f47aec5b9cafc83680f1",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.4.3 → v0.4.4](https://github.com/astral-sh/ruff-pre-commit/compare/v0.4.3...v0.4.4)\n- [github.com/pre-commit/mirrors-clang-format: v18.1.4 → v18.1.5](https://github.com/pre-commit/mirrors-clang-format/compare/v18.1.4...v18.1.5)",
          "timestamp": "2024-05-13T16:50:23-06:00",
          "tree_id": "9cb7c7c8c75db568572d398c1e0942a437c8c729",
          "url": "https://github.com/cocotb/cocotb/commit/6c42eef3673b477be974f47aec5b9cafc83680f1"
        },
        "date": 1715640875356,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09967084363312448,
            "unit": "iter/sec",
            "range": "stddev: 0.08438401948145977",
            "extra": "mean: 10.033024338400015 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11885535502570972,
            "unit": "iter/sec",
            "range": "stddev: 0.11464477712286596",
            "extra": "mean: 8.41358809440003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "ce15cd8b2b6fcaa93dc098fcd7c35dda47343752",
          "message": "Improve documentation on triggers and utils.",
          "timestamp": "2024-05-15T19:40:04-06:00",
          "tree_id": "45047606c38d8e1194b722327d1fe8f74860a80d",
          "url": "https://github.com/cocotb/cocotb/commit/ce15cd8b2b6fcaa93dc098fcd7c35dda47343752"
        },
        "date": 1715823850092,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09975827551709253,
            "unit": "iter/sec",
            "range": "stddev: 0.0554950166123835",
            "extra": "mean: 10.024231020599995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11817587770218727,
            "unit": "iter/sec",
            "range": "stddev: 0.06681435564476573",
            "extra": "mean: 8.461963807199982 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cmarqu42@gmail.com",
            "name": "Colin Marquardt",
            "username": "cmarqu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "10feab69112011358f4e31e6c138a249e393667a",
          "message": "Add the mixed_signal example to CI (#3900)",
          "timestamp": "2024-05-19T21:59:05+02:00",
          "tree_id": "5d4b708da0f0464cded240e5b748aa3d6d9dff4e",
          "url": "https://github.com/cocotb/cocotb/commit/10feab69112011358f4e31e6c138a249e393667a"
        },
        "date": 1716148991108,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09900173723431065,
            "unit": "iter/sec",
            "range": "stddev: 0.0705666423169973",
            "extra": "mean: 10.10083285340001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11784596395533158,
            "unit": "iter/sec",
            "range": "stddev: 0.09611793083123808",
            "extra": "mean: 8.485653360000015 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "c5ea66bb7d0069936e44f4ceba80db9622abb05d",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.04.29 → 2024.05.13](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.04.29...2024.05.13)",
          "timestamp": "2024-05-20T16:34:35-06:00",
          "tree_id": "3d3b6fb399549cb401822e61f073cfac7dd3f930",
          "url": "https://github.com/cocotb/cocotb/commit/c5ea66bb7d0069936e44f4ceba80db9622abb05d"
        },
        "date": 1716244740603,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09888555114653852,
            "unit": "iter/sec",
            "range": "stddev: 0.07480101651961386",
            "extra": "mean: 10.112700879000005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11634044473887478,
            "unit": "iter/sec",
            "range": "stddev: 0.0518883469567707",
            "extra": "mean: 8.595463101799998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "olof.kindgren@gmail.com",
            "name": "Olof Kindgren",
            "username": "olofk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0dfdc6403961b3e2306c719fdf57507e8e175d96",
          "message": "Fix instructions for extending build flow with Verilator (#3901)",
          "timestamp": "2024-05-21T09:56:08-06:00",
          "tree_id": "d016a0236dff6478a2cbdec0b375fd3db15c89ed",
          "url": "https://github.com/cocotb/cocotb/commit/0dfdc6403961b3e2306c719fdf57507e8e175d96"
        },
        "date": 1716307216505,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09826210486725169,
            "unit": "iter/sec",
            "range": "stddev: 0.09214213499463558",
            "extra": "mean: 10.176863210399995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11681755343419657,
            "unit": "iter/sec",
            "range": "stddev: 0.0929703124263907",
            "extra": "mean: 8.560357331600006 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anolte512@gmail.com",
            "name": "Andrew Nolte",
            "username": "AndrewNolte"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "899021a9c4829a14c1a0442f927c78cc8a8de19a",
          "message": "Xcelium cond scope segfault fix (#3890)\n\nCo-authored-by: Andrew Nolte <anolte@hudson-trading.com>",
          "timestamp": "2024-05-21T11:37:29-06:00",
          "tree_id": "7771739b088192abd7e44e793725477213df9474",
          "url": "https://github.com/cocotb/cocotb/commit/899021a9c4829a14c1a0442f927c78cc8a8de19a"
        },
        "date": 1716313299908,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.0986596831955322,
            "unit": "iter/sec",
            "range": "stddev: 0.13918401765435334",
            "extra": "mean: 10.1358525348 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1168702701181124,
            "unit": "iter/sec",
            "range": "stddev: 0.10911670520676577",
            "extra": "mean: 8.556496010400007 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anolte512@gmail.com",
            "name": "Andrew Nolte",
            "username": "AndrewNolte"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd94601f1faa8f6100ea62750304fd3cb4bfdba0",
          "message": "[Verilog] Interface Array Testcase (#3704)\n\nCo-authored-by: Andrew Nolte <anolte@hudson-trading.com>",
          "timestamp": "2024-05-21T16:11:48-06:00",
          "tree_id": "3989855a245b833fd63c183eb44eb9d78d7f651e",
          "url": "https://github.com/cocotb/cocotb/commit/dd94601f1faa8f6100ea62750304fd3cb4bfdba0"
        },
        "date": 1716329752423,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09877844602878855,
            "unit": "iter/sec",
            "range": "stddev: 0.09203331044823362",
            "extra": "mean: 10.123666044599997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11663762123380968,
            "unit": "iter/sec",
            "range": "stddev: 0.062218045231721315",
            "extra": "mean: 8.57356305300001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anolte512@gmail.com",
            "name": "Andrew Nolte",
            "username": "AndrewNolte"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "36832c15fbad184c418204c60bfaa6b82d4f01be",
          "message": "[Vpi] Allow using packed struct as a signal on sim module (#3608)\n\nCo-authored-by: Andrew Nolte <anolte@hudson-trading.com>",
          "timestamp": "2024-05-22T11:11:46-06:00",
          "tree_id": "21f49429d159b0f379befb5ce1c578995f07cdae",
          "url": "https://github.com/cocotb/cocotb/commit/36832c15fbad184c418204c60bfaa6b82d4f01be"
        },
        "date": 1716398148195,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09843503998235409,
            "unit": "iter/sec",
            "range": "stddev: 0.03518690284891195",
            "extra": "mean: 10.15898403839999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11626883351882493,
            "unit": "iter/sec",
            "range": "stddev: 0.050198844627996134",
            "extra": "mean: 8.600757139600024 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "4c65998210f41fd780f2ceb9ff0e3fbfbe3f5d9b",
          "message": "[pre-commit.ci] auto fixes from pre-commit.com hooks\n\nfor more information, see https://pre-commit.ci",
          "timestamp": "2024-05-28T09:54:58-06:00",
          "tree_id": "048a777c3734a5d62d58a1e02889a444c0c84472",
          "url": "https://github.com/cocotb/cocotb/commit/4c65998210f41fd780f2ceb9ff0e3fbfbe3f5d9b"
        },
        "date": 1716911944516,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09939842590808681,
            "unit": "iter/sec",
            "range": "stddev: 0.07047219198830056",
            "extra": "mean: 10.06052149080001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11711407908674673,
            "unit": "iter/sec",
            "range": "stddev: 0.08826596775369507",
            "extra": "mean: 8.538683032799986 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teo.biton@gmail.com",
            "name": "teobiton",
            "username": "teobiton"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "3bcec2469df1b9338cfef9d7fe717724be0dad78",
          "message": "Fix Sphinx reported errors",
          "timestamp": "2024-05-30T10:20:07-06:00",
          "tree_id": "64d4f79737f15c905b525cdac882f4f7fe6853f3",
          "url": "https://github.com/cocotb/cocotb/commit/3bcec2469df1b9338cfef9d7fe717724be0dad78"
        },
        "date": 1717086255585,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09875386936176524,
            "unit": "iter/sec",
            "range": "stddev: 0.07179170051584657",
            "extra": "mean: 10.126185499999986 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11705967180321844,
            "unit": "iter/sec",
            "range": "stddev: 0.0806458992583077",
            "extra": "mean: 8.542651663000015 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "0c4b24c32697f8cdf44620848425f72e1be10bbf",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.4.5 → v0.4.7](https://github.com/astral-sh/ruff-pre-commit/compare/v0.4.5...v0.4.7)\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.05.24 → 2024.06.03](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.05.24...2024.06.03)",
          "timestamp": "2024-06-04T07:44:05-06:00",
          "tree_id": "5591f087c8ce73df826e96ad62e284e1426ce3c7",
          "url": "https://github.com/cocotb/cocotb/commit/0c4b24c32697f8cdf44620848425f72e1be10bbf"
        },
        "date": 1717508891424,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09862407950744319,
            "unit": "iter/sec",
            "range": "stddev: 0.131264279305668",
            "extra": "mean: 10.139511618199993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11721092475806792,
            "unit": "iter/sec",
            "range": "stddev: 0.03121159109539557",
            "extra": "mean: 8.531627935400001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teo.biton@gmail.com",
            "name": "teobiton",
            "username": "teobiton"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "514558f359cbdf6af4de8ea54cc7931dcc1a6be9",
          "message": "Python runner in quickstart guide\n\nFixes #3844",
          "timestamp": "2024-06-04T07:44:34-06:00",
          "tree_id": "783a088c45e5cbf3bc01f84c73467ca0f16b0d8f",
          "url": "https://github.com/cocotb/cocotb/commit/514558f359cbdf6af4de8ea54cc7931dcc1a6be9"
        },
        "date": 1717509132235,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09946771318646616,
            "unit": "iter/sec",
            "range": "stddev: 0.03922313324048736",
            "extra": "mean: 10.053513526799998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11660367457755283,
            "unit": "iter/sec",
            "range": "stddev: 0.07663052650182973",
            "extra": "mean: 8.576059061799999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "d53dad836335cc0343685b1c75cd7df4dae3ccd5",
          "message": "Remove last traces of COCOTB_RESOLVE_X",
          "timestamp": "2024-06-05T13:08:11-06:00",
          "tree_id": "44d5e6dee9095447246b72ba8d155a2f03622e6a",
          "url": "https://github.com/cocotb/cocotb/commit/d53dad836335cc0343685b1c75cd7df4dae3ccd5"
        },
        "date": 1717614738799,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09823540474892677,
            "unit": "iter/sec",
            "range": "stddev: 0.03155712677408876",
            "extra": "mean: 10.179629254400004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1171786026552487,
            "unit": "iter/sec",
            "range": "stddev: 0.1023701768816517",
            "extra": "mean: 8.533981267399998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cmarqu42@gmail.com",
            "name": "Colin Marquardt",
            "username": "cmarqu"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "3fd24f5ffa02b53d4d7e260f1fd575b5b5297ff4",
          "message": "Document COVERAGE_RCFILE\n\nCloses #3574.",
          "timestamp": "2024-06-05T21:00:03-06:00",
          "tree_id": "47e70e8abb506bc34608216052efc4bf82969fd9",
          "url": "https://github.com/cocotb/cocotb/commit/3fd24f5ffa02b53d4d7e260f1fd575b5b5297ff4"
        },
        "date": 1717643056769,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09896221444995339,
            "unit": "iter/sec",
            "range": "stddev: 0.05266077357374904",
            "extra": "mean: 10.104866847999995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11659775182507486,
            "unit": "iter/sec",
            "range": "stddev: 0.052500053785080145",
            "extra": "mean: 8.576494695199994 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "e77b72556fc732f4d69074495cbff5983e1cc1d2",
          "message": "Fix `cocotb-config --help-vars`",
          "timestamp": "2024-06-07T15:14:59-06:00",
          "tree_id": "d0be502d92860968a98badc443743ebacdaea6d2",
          "url": "https://github.com/cocotb/cocotb/commit/e77b72556fc732f4d69074495cbff5983e1cc1d2"
        },
        "date": 1717795143166,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09946686091189744,
            "unit": "iter/sec",
            "range": "stddev: 0.05789385966334951",
            "extra": "mean: 10.053599669599986 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11628911314160394,
            "unit": "iter/sec",
            "range": "stddev: 0.03500492608522202",
            "extra": "mean: 8.599257256199996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "5567157fd77ffe5f50e636db6daae556ba73e330",
          "message": "Introduce COCOTB_TRUST_INERTIAL_WRITES\n\nBehavior and performance optimization by trusting inertial writes in the\nVPI/VHPI/FLI rather than mimicing that behavior by applying writes in\nthe ReadWrite callback.\n\nAdd a couple tests for write scheduling behavior.",
          "timestamp": "2024-06-08T07:32:52-06:00",
          "tree_id": "dd0fd401f63e865c39b713f68797ddcd86bb56cd",
          "url": "https://github.com/cocotb/cocotb/commit/5567157fd77ffe5f50e636db6daae556ba73e330"
        },
        "date": 1717853819824,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09878840899283761,
            "unit": "iter/sec",
            "range": "stddev: 0.07411939819335378",
            "extra": "mean: 10.122645057200003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12677538412298564,
            "unit": "iter/sec",
            "range": "stddev: 0.06614174217726011",
            "extra": "mean: 7.887966634200007 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "eab2b463392ac3a1d5a0a0a9c9c1f939414832ef",
          "message": "Make cocotb.Task not a Coroutine\n\nThere is no reason it should be a Coroutine. In fact if used as a\nCoroutine it has the opportunity to skip a lot of the state keeping that\nTask does.",
          "timestamp": "2024-06-09T10:52:35-06:00",
          "tree_id": "230f930cfcc769c0c4ad4ca078692cfe1f7bade7",
          "url": "https://github.com/cocotb/cocotb/commit/eab2b463392ac3a1d5a0a0a9c9c1f939414832ef"
        },
        "date": 1717952207519,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09748079468130212,
            "unit": "iter/sec",
            "range": "stddev: 0.06522221440508091",
            "extra": "mean: 10.258430937800005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12498662628100399,
            "unit": "iter/sec",
            "range": "stddev: 0.014268337696056291",
            "extra": "mean: 8.0008560096 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "242a909726d0adea5bbc998dfd1c5ac69c70e892",
          "message": "Rename `SIM_OUTPUT_REDIRECT` to `SIM_CMD_SUFFIX` and add to all Makefiles (#3927)\n\n* Rename SIM_OUTPUT_REDIRECT to SIM_CMD_SUFFIX and add to all sims\r\n\r\nWe intended to add SIM_OUTPUT_REDIRECT to all simulators and make it\r\nempty by default, but the name makes this a little more generic and\r\nparallels the extant SIM_CMD_PREFIX variable.",
          "timestamp": "2024-06-09T18:22:54-06:00",
          "tree_id": "78dcb09162ef1b7664a5ec8d89db7b4891655664",
          "url": "https://github.com/cocotb/cocotb/commit/242a909726d0adea5bbc998dfd1c5ac69c70e892"
        },
        "date": 1717979218637,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09876627245586223,
            "unit": "iter/sec",
            "range": "stddev: 0.04816140817527088",
            "extra": "mean: 10.124913851000008 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1272525454595425,
            "unit": "iter/sec",
            "range": "stddev: 0.05117065274647933",
            "extra": "mean: 7.858388972800003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "98ccb51379ee1579a6ad6257292f9f4ff90b0502",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.4.7 → v0.4.8](https://github.com/astral-sh/ruff-pre-commit/compare/v0.4.7...v0.4.8)\n- [github.com/pre-commit/mirrors-clang-format: v18.1.5 → v18.1.6](https://github.com/pre-commit/mirrors-clang-format/compare/v18.1.5...v18.1.6)\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.06.03 → 2024.06.10](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.06.03...2024.06.10)",
          "timestamp": "2024-06-10T16:38:46-06:00",
          "tree_id": "9155e4310f3778c5a469f6051b5eba13b37956c0",
          "url": "https://github.com/cocotb/cocotb/commit/98ccb51379ee1579a6ad6257292f9f4ff90b0502"
        },
        "date": 1718059372582,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09976154668293018,
            "unit": "iter/sec",
            "range": "stddev: 0.09098360803529178",
            "extra": "mean: 10.023902327600002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1273276886524432,
            "unit": "iter/sec",
            "range": "stddev: 0.06372394191867435",
            "extra": "mean: 7.8537512978 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "olagrottvik@gmail.com",
            "name": "ogre",
            "username": "olagrottvik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a4f9144593829286b1b7878f72b03cdf25e381a",
          "message": "Add support for VHDL libraries in Riviera-PRO Makefile (#3922)\n\nCo-authored-by: Ola Groettvik <ola.groettvik@cern.ch>",
          "timestamp": "2024-06-11T10:22:04-06:00",
          "tree_id": "d638529061e5c016b0407d129cd2872cad73077f",
          "url": "https://github.com/cocotb/cocotb/commit/4a4f9144593829286b1b7878f72b03cdf25e381a"
        },
        "date": 1718123179158,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09835092495394329,
            "unit": "iter/sec",
            "range": "stddev: 0.0603952022743246",
            "extra": "mean: 10.1676725508 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1259203378382101,
            "unit": "iter/sec",
            "range": "stddev: 0.08558037684134162",
            "extra": "mean: 7.941528883800004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teo.biton@gmail.com",
            "name": "teobiton",
            "username": "teobiton"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "4c73e5ad32e350d1448f411536c06025d5695c55",
          "message": "Prefix environment variables with COCOTB_\n\nThis change concerns environment variables MODULE, TESTCASE,\nTOPLEVEL, RANDOM_SEED, COVERAGE, COVERAGE_RCFILE and PLUSARGS.\nA warning is issued when these old variables are used.\nThe Makefile flow and runners are both affected.",
          "timestamp": "2024-06-12T09:16:41-06:00",
          "tree_id": "d085bf2dfc7b8a5b984bbfec412138fbbfc94b3f",
          "url": "https://github.com/cocotb/cocotb/commit/4c73e5ad32e350d1448f411536c06025d5695c55"
        },
        "date": 1718205729571,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09871579182206676,
            "unit": "iter/sec",
            "range": "stddev: 0.05869564688837808",
            "extra": "mean: 10.130091462999962 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12634135813878045,
            "unit": "iter/sec",
            "range": "stddev: 0.0761519192616157",
            "extra": "mean: 7.91506451040002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "cdbf507cbb0bdbfdf19b65a6b6516e5a1fbb074a",
          "message": "CI: Update Riviera-PRO to 2024.04\n\nUse the latest Riviera-PRO 2024.04 in CI, and move\nthe previously used 2023.10 version to the extended\ntests.",
          "timestamp": "2024-06-18T10:52:31+01:00",
          "tree_id": "05fa6156933c56b75e62861b16256f9f6e9a8f53",
          "url": "https://github.com/cocotb/cocotb/commit/cdbf507cbb0bdbfdf19b65a6b6516e5a1fbb074a"
        },
        "date": 1718704591233,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09870947488976345,
            "unit": "iter/sec",
            "range": "stddev: 0.0665022540229824",
            "extra": "mean: 10.130739740199994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1262976177065078,
            "unit": "iter/sec",
            "range": "stddev: 0.07307877146009432",
            "extra": "mean: 7.917805720800009 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "5c5bf832384379774e2216d70a184bdd76d66f6f",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.4.8 → v0.4.9](https://github.com/astral-sh/ruff-pre-commit/compare/v0.4.8...v0.4.9)",
          "timestamp": "2024-06-18T14:10:37-06:00",
          "tree_id": "8866b2421053391e815662f8085dac1ac380c40d",
          "url": "https://github.com/cocotb/cocotb/commit/5c5bf832384379774e2216d70a184bdd76d66f6f"
        },
        "date": 1718741679791,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09912444609476115,
            "unit": "iter/sec",
            "range": "stddev: 0.0904318309176819",
            "extra": "mean: 10.088328756399994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.126225481227263,
            "unit": "iter/sec",
            "range": "stddev: 0.02449237193490594",
            "extra": "mean: 7.92233066 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teo.biton@gmail.com",
            "name": "teobiton",
            "username": "teobiton"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "619edb993b30098063bbc1ef48908812da4076e2",
          "message": "Fix config_file for coverage\n\nThe configuration file is given to the coverage initializer via an\nargument instead of it being read from the environment in the\ncoverage module.",
          "timestamp": "2024-06-19T07:19:17-06:00",
          "tree_id": "8ec03b8e3ec6382a0fdf4797e1ce129751373ad8",
          "url": "https://github.com/cocotb/cocotb/commit/619edb993b30098063bbc1ef48908812da4076e2"
        },
        "date": 1718803396516,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.0985135850753872,
            "unit": "iter/sec",
            "range": "stddev: 0.08772929611965348",
            "extra": "mean: 10.150884258600001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1265767749484735,
            "unit": "iter/sec",
            "range": "stddev: 0.075490344087503",
            "extra": "mean: 7.900343490400013 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49717947+NickolayTernovoy@users.noreply.github.com",
            "name": "Nickolay",
            "username": "NickolayTernovoy"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "9659c4710ba8608c41a0bb0c38f60cde28c46e47",
          "message": "Replacing the no longer supported option '+acc+1' with '-debug_access+r+w-memcbk -debug_region+cell'",
          "timestamp": "2024-06-19T11:34:35-06:00",
          "tree_id": "e74ffea8f7d71c0679ebaf28dc4f9d1b77f77106",
          "url": "https://github.com/cocotb/cocotb/commit/9659c4710ba8608c41a0bb0c38f60cde28c46e47"
        },
        "date": 1718818714561,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.0988376842342928,
            "unit": "iter/sec",
            "range": "stddev: 0.06022360241825574",
            "extra": "mean: 10.117598441799988 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12628720148415334,
            "unit": "iter/sec",
            "range": "stddev: 0.09795409116928502",
            "extra": "mean: 7.918458784799986 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "7591c3d46e388a4fa81fdcd6f8f4d399a957c6bc",
          "message": "Fix isort config\n\nWe manually list out first-party and third-party packages so that isort\nkeeps cocotb and external packages in separate import sections.",
          "timestamp": "2024-06-20T09:51:18-06:00",
          "tree_id": "bd26b6543a987756b6cb15cffae878f267d99777",
          "url": "https://github.com/cocotb/cocotb/commit/7591c3d46e388a4fa81fdcd6f8f4d399a957c6bc"
        },
        "date": 1718898942688,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09866460202262343,
            "unit": "iter/sec",
            "range": "stddev: 0.08450093681867447",
            "extra": "mean: 10.135347221800009 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.126518207911692,
            "unit": "iter/sec",
            "range": "stddev: 0.04853188288188587",
            "extra": "mean: 7.9040006692000135 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "9555e71995b87158daf9d408c35c86d555e964c1",
          "message": "CI: Move Verilator on macos to experimental bucket\n\nWe cannot tightly control the version of Verilator being used in our\nCI testing, which led to Verilator 5.026 breaking CI on macOS due to an\nupstream issue (https://github.com/verilator/verilator/issues/5190).\n\nMove this test to the experimental bucket until it's stable again.",
          "timestamp": "2024-06-20T10:44:04-06:00",
          "tree_id": "29a2ac9a5a164974adea34a3ba976b0e6987cbdc",
          "url": "https://github.com/cocotb/cocotb/commit/9555e71995b87158daf9d408c35c86d555e964c1"
        },
        "date": 1718902094086,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09894269359924505,
            "unit": "iter/sec",
            "range": "stddev: 0.04072235581531043",
            "extra": "mean: 10.106860482800016 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12658185316598616,
            "unit": "iter/sec",
            "range": "stddev: 0.0644539174324315",
            "extra": "mean: 7.90002654399999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "a3457fc3416a6c2d96ed5bb6a480e284194e3478",
          "message": "Riviera-PRO: Always exit the compilation step\n\nPreviously, we always redirected the output of Riviera-PRO in Makefiles,\nwhich caused Riviera to unconditionally quit the compilation step. We\nno longer do that, so we need to be explicit.\n\nSee also https://github.com/cocotb/cocotb/pull/3495 for the equivalent\nchange in the runner.",
          "timestamp": "2024-06-21T09:39:19+01:00",
          "tree_id": "0fe8e48a90c7b88ee13ee333a970d4a7d41fba87",
          "url": "https://github.com/cocotb/cocotb/commit/a3457fc3416a6c2d96ed5bb6a480e284194e3478"
        },
        "date": 1718959404345,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09849404669015852,
            "unit": "iter/sec",
            "range": "stddev: 0.0537428158307866",
            "extra": "mean: 10.152897901999996 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1258868029713278,
            "unit": "iter/sec",
            "range": "stddev: 0.0487047888457473",
            "extra": "mean: 7.943644420199962 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "ec406b26a7dc17174a4bc9d570d50761a6b46d55",
          "message": "CI: Run against Xcelium 2403\n\nRun against the latest version of Xcelium, 2403, in CI, and move the\n2309 version to the extended tests bucket.",
          "timestamp": "2024-06-21T15:08:18+01:00",
          "tree_id": "2fbb5c0aaf2668918f9b882c32659b2ba1dd48cf",
          "url": "https://github.com/cocotb/cocotb/commit/ec406b26a7dc17174a4bc9d570d50761a6b46d55"
        },
        "date": 1718979160569,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.0989760395524375,
            "unit": "iter/sec",
            "range": "stddev: 0.07063890809154116",
            "extra": "mean: 10.103455387000002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12584314998897447,
            "unit": "iter/sec",
            "range": "stddev: 0.11269631304170821",
            "extra": "mean: 7.946399943799986 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14ae0c6e0490fff90778adbcab72080a919b1abf",
          "message": "Build verilator from source for MacOS CI (#3961)",
          "timestamp": "2024-06-21T08:56:17-06:00",
          "tree_id": "1d24b113d1359eaf3ed8cf08779de6959cecb3a2",
          "url": "https://github.com/cocotb/cocotb/commit/14ae0c6e0490fff90778adbcab72080a919b1abf"
        },
        "date": 1718982018981,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09843232612357382,
            "unit": "iter/sec",
            "range": "stddev: 0.1093758520881981",
            "extra": "mean: 10.159264129800011 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12663722362479696,
            "unit": "iter/sec",
            "range": "stddev: 0.0826932559551363",
            "extra": "mean: 7.896572361399978 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gilbertoabram@tersatech.com",
            "name": "gilbertoabram",
            "username": "gilbertoabram"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "421747f3b60e9491d1ef8497b17686c142ece630",
          "message": "Use raw docstrings in some places where backslashes are present. (#3953)\n\nCo-authored-by: Gilberto Abram <gilberto@hudson-trading.com>",
          "timestamp": "2024-06-21T12:45:42-06:00",
          "tree_id": "3f8e1956cecc1a1077dbbefdd5cc9e41dc247487",
          "url": "https://github.com/cocotb/cocotb/commit/421747f3b60e9491d1ef8497b17686c142ece630"
        },
        "date": 1718995782960,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09907704062122906,
            "unit": "iter/sec",
            "range": "stddev: 0.06992002752946519",
            "extra": "mean: 10.093155727399994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12748916325156298,
            "unit": "iter/sec",
            "range": "stddev: 0.04964726212522982",
            "extra": "mean: 7.843803932000003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teo.biton@gmail.com",
            "name": "teobiton",
            "username": "teobiton"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "66b5f12ab310dc7860cb2ab7c665a769413113df",
          "message": "Document changes on cocotb environment variables\n\nCocotb environment variables are now prefixed with COCOTB_ for\nclarity. This is now reflected in the documentation.\n\nFixes #3940",
          "timestamp": "2024-06-23T08:42:07-06:00",
          "tree_id": "b5d77d337a92855a3c54bfcbf929309b4c49bf4c",
          "url": "https://github.com/cocotb/cocotb/commit/66b5f12ab310dc7860cb2ab7c665a769413113df"
        },
        "date": 1719153973530,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09865706536190755,
            "unit": "iter/sec",
            "range": "stddev: 0.0519396621589288",
            "extra": "mean: 10.136121486399997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1258686807112034,
            "unit": "iter/sec",
            "range": "stddev: 0.0588992474247176",
            "extra": "mean: 7.944788126399987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2bfb730851c18883407f4a3397864fb148cc0ca9",
          "message": "Scheduler refactor (#3942)\n\nRemoved pending_triggers and scheduling queue. Made pending_tasks *the*\r\ntask queue. Whenever triggers fires they now immediately add the tasks\r\nwaiting upon them to the scheduling queue alongside the outcome the\r\nscheduler should inject into the task.\r\n\r\nAlso cleaned up state tracking a bit by using an Enum.\r\n\r\nSeparated react method into one for GPITriggers and the other for\r\nPython Triggers.\r\n\r\nAlso improved documentation of how the scheduler works and the quirks and caveats.",
          "timestamp": "2024-06-23T08:44:31-06:00",
          "tree_id": "d2f4462d6c8cc994a7ded4dc4ca4fb259e9e6299",
          "url": "https://github.com/cocotb/cocotb/commit/2bfb730851c18883407f4a3397864fb148cc0ca9"
        },
        "date": 1719154232541,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09850492207860927,
            "unit": "iter/sec",
            "range": "stddev: 0.08444145793999974",
            "extra": "mean: 10.151776976199994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12631195564895192,
            "unit": "iter/sec",
            "range": "stddev: 0.09115886988361624",
            "extra": "mean: 7.916906953599982 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b68d594e7cc8b160640e46354ce953a2eaf6428",
          "message": "Remove support for `Timer(0)` (#3937)\n\nPreviously we issued a warning, but it was always an invalid operation\r\nthat only sometimes worked in simulators.\r\n\r\nIf we round to 0 steps, we fix it up after the fact to 1. This is valid\r\nsince this only occurs when using a rounding mode, and when using a\r\nrounding mode the user agrees to whatever reasonable value we \"round\"\r\nto.",
          "timestamp": "2024-06-24T10:47:47-06:00",
          "tree_id": "c00c4f65e007765047d6b6c6a7212c5c95713e0c",
          "url": "https://github.com/cocotb/cocotb/commit/0b68d594e7cc8b160640e46354ce953a2eaf6428"
        },
        "date": 1719247904036,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10142140830495043,
            "unit": "iter/sec",
            "range": "stddev: 0.028698141577680334",
            "extra": "mean: 9.859851255399985 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.13086192247928172,
            "unit": "iter/sec",
            "range": "stddev: 0.11017093519740839",
            "extra": "mean: 7.64164228259998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "7b6c8337534783be484bf812d698d7f296230a02",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.4.9 → v0.4.10](https://github.com/astral-sh/ruff-pre-commit/compare/v0.4.9...v0.4.10)\n- [github.com/pre-commit/mirrors-clang-format: v18.1.6 → v18.1.7](https://github.com/pre-commit/mirrors-clang-format/compare/v18.1.6...v18.1.7)\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.06.10 → 2024.06.24](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.06.10...2024.06.24)",
          "timestamp": "2024-06-24T16:38:38-06:00",
          "tree_id": "0f958d71897be7a4a20e72564a225f6f493b6fc9",
          "url": "https://github.com/cocotb/cocotb/commit/7b6c8337534783be484bf812d698d7f296230a02"
        },
        "date": 1719268958709,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09786019480886267,
            "unit": "iter/sec",
            "range": "stddev: 0.07511634795527053",
            "extra": "mean: 10.218659404399995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12579904508788434,
            "unit": "iter/sec",
            "range": "stddev: 0.07625345900685576",
            "extra": "mean: 7.949185936200001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb4ce5287c3f090bea0389e3cf2f1f1c133c8560",
          "message": "Make awaiting `Join` trigger not return `Task` result (#3931)\n\nAwaiting the Join trigger will no longer return the task's result, the\r\nuser can use `await task` for the same effect. This allows the user to\r\nhave some way of awaiting a task to finish *without* getting the\r\nresult, which is especially useful if the outcome is anticipated to be\r\nan exception.\r\n\r\nCo-authored-by: Colin Marquardt <cmarqu42@gmail.com>\r\nCo-authored-by: Marlon James <marlon.james@gmail.com>",
          "timestamp": "2024-06-24T17:39:15-06:00",
          "tree_id": "b595e7d966119fcdb6ca22a2d0b3fdaaaf4bcd56",
          "url": "https://github.com/cocotb/cocotb/commit/cb4ce5287c3f090bea0389e3cf2f1f1c133c8560"
        },
        "date": 1719272598414,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09918013218799628,
            "unit": "iter/sec",
            "range": "stddev: 0.08726453479124197",
            "extra": "mean: 10.082664520999998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1273025621757095,
            "unit": "iter/sec",
            "range": "stddev: 0.07787805728009933",
            "extra": "mean: 7.855301440199992 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "925b2f5a37e150558a8ccf02e0026ba6f3424ec6",
          "message": "Improve Task's result TypeVar (#3973)",
          "timestamp": "2024-06-25T08:30:07-07:00",
          "tree_id": "d9ba499c5a25079207a9d04c90bd749eae896c3d",
          "url": "https://github.com/cocotb/cocotb/commit/925b2f5a37e150558a8ccf02e0026ba6f3424ec6"
        },
        "date": 1719329655929,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09799110363377628,
            "unit": "iter/sec",
            "range": "stddev: 0.07476556917342124",
            "extra": "mean: 10.205008035600008 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12738066793364275,
            "unit": "iter/sec",
            "range": "stddev: 0.11162037152341454",
            "extra": "mean: 7.850484820200006 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "a8dfba18b424a67158ed46de9cadf521b2472153",
          "message": "Increase timeout to allow slow Mac OS tests to finish",
          "timestamp": "2024-06-25T10:23:10-06:00",
          "tree_id": "092ed3118deaa94c56a1017a167f722395c88c58",
          "url": "https://github.com/cocotb/cocotb/commit/a8dfba18b424a67158ed46de9cadf521b2472153"
        },
        "date": 1719332829201,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09896059745655351,
            "unit": "iter/sec",
            "range": "stddev: 0.05486538241808193",
            "extra": "mean: 10.105031959200005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12572406273007955,
            "unit": "iter/sec",
            "range": "stddev: 0.04138637440730935",
            "extra": "mean: 7.953926863999993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ccd3ab7bb758676eae7d9480a6d8dd3c98dfef0a",
          "message": "Remove dead code paths from scheduler (#3976)\n\nSince removing the `yield` syntax there is no way for the scheduler to\r\never see an async generator object, Waitable, or unstarted coroutine function.\r\nPython's `await` statement calls the `__await__` function, and the\r\naforementioned objects either handle this correctly or TypeError. So not our problem anymore.",
          "timestamp": "2024-06-25T10:25:20-06:00",
          "tree_id": "893b4eb2e348298646e764b3c352df9547417389",
          "url": "https://github.com/cocotb/cocotb/commit/ccd3ab7bb758676eae7d9480a6d8dd3c98dfef0a"
        },
        "date": 1719333101973,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09802502229924727,
            "unit": "iter/sec",
            "range": "stddev: 0.07982759300089488",
            "extra": "mean: 10.201476893799992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1250457091084711,
            "unit": "iter/sec",
            "range": "stddev: 0.06846009820642397",
            "extra": "mean: 7.99707568639999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "7e8c7c4c508aead14a270108d62e02b18d5944cf",
          "message": "CI: Update to Questa 2024.2\n\nAs usual, use the latest release version in CI and move the previously\nused version to the extended tests.",
          "timestamp": "2024-06-26T08:56:17+02:00",
          "tree_id": "41e0aa0fdea2d211a404e1ef412e71dde680b1cc",
          "url": "https://github.com/cocotb/cocotb/commit/7e8c7c4c508aead14a270108d62e02b18d5944cf"
        },
        "date": 1719385220414,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09763016950365086,
            "unit": "iter/sec",
            "range": "stddev: 0.037349312184460075",
            "extra": "mean: 10.242735468799992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12478640638695056,
            "unit": "iter/sec",
            "range": "stddev: 0.11699717558435511",
            "extra": "mean: 8.013693389799982 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "7a063c31f55e8f2a12d76113e24b2eb267c93d2e",
          "message": "Remove handshaking between Trigger and scheduler for Outcome to resume\n\nPreviously the scheduler asked the Trigger what Outcome it should resume\nthe task with. This is not useful now since we use Trigger.__await__ to\ninstrument this.\n\nAnd now it is hardcoded in Trigger that awaiting a Trigger always\nreturns a Trigger, so the typing was corrected.",
          "timestamp": "2024-06-26T12:31:24-06:00",
          "tree_id": "db89b87317daaa9d8638db38cf57b4a7c1a353fa",
          "url": "https://github.com/cocotb/cocotb/commit/7a063c31f55e8f2a12d76113e24b2eb267c93d2e"
        },
        "date": 1719427239460,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09856546258562034,
            "unit": "iter/sec",
            "range": "stddev: 0.0762624185580223",
            "extra": "mean: 10.145541589999999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1274893825049748,
            "unit": "iter/sec",
            "range": "stddev: 0.061455896700529686",
            "extra": "mean: 7.843790442400007 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cee63b195cfb55377401570dd10f079252aa200d",
          "message": "Add legacy `.buff` property to `LogicArray` (#3944)\n\n\r\nCo-authored-by: Colin Marquardt <cmarqu42@gmail.com>\r\nCo-authored-by: Marlon James <marlon.james@gmail.com>",
          "timestamp": "2024-06-26T13:13:20-06:00",
          "tree_id": "5cf0af015e7f084773c6d777ae5da6d47517f81b",
          "url": "https://github.com/cocotb/cocotb/commit/cee63b195cfb55377401570dd10f079252aa200d"
        },
        "date": 1719429444998,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09893805908550034,
            "unit": "iter/sec",
            "range": "stddev: 0.060425080574784046",
            "extra": "mean: 10.10733391419999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12681381994671298,
            "unit": "iter/sec",
            "range": "stddev: 0.08695719952264917",
            "extra": "mean: 7.885575881399984 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "distinct": true,
          "id": "3c352783eb4446a53706de640a2f6e0ad80483d2",
          "message": "Improve coverage for triggers",
          "timestamp": "2024-06-26T16:35:51-07:00",
          "tree_id": "f643f9040fb43d6a489392d71ae08646a19fd642",
          "url": "https://github.com/cocotb/cocotb/commit/3c352783eb4446a53706de640a2f6e0ad80483d2"
        },
        "date": 1719445191467,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09918570162437973,
            "unit": "iter/sec",
            "range": "stddev: 0.027668635339267954",
            "extra": "mean: 10.082098363199975 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12673688285683268,
            "unit": "iter/sec",
            "range": "stddev: 0.07539546693122236",
            "extra": "mean: 7.890362911400007 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6621b069131df442c7d00065b244dd71eb6fe25f",
          "message": "Verilator: Don't run interface array tests on versions earlier than v5.024 (#3986)",
          "timestamp": "2024-06-26T16:38:31-07:00",
          "tree_id": "c56f1b11890bf56615f1846dbf40d54590a3477c",
          "url": "https://github.com/cocotb/cocotb/commit/6621b069131df442c7d00065b244dd71eb6fe25f"
        },
        "date": 1719445426223,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09971030812999307,
            "unit": "iter/sec",
            "range": "stddev: 0.11622765878014316",
            "extra": "mean: 10.02905335219998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12879899453316374,
            "unit": "iter/sec",
            "range": "stddev: 0.10358487081447107",
            "extra": "mean: 7.764035764599976 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "94774d30879a55efab811be91207ca5f4de97407",
          "message": "CI: Update NVC to latest release 1.12.2 (#3988)",
          "timestamp": "2024-06-26T21:18:33-07:00",
          "tree_id": "871798a1f2c66953d63c123a63634a5e20d0c9f6",
          "url": "https://github.com/cocotb/cocotb/commit/94774d30879a55efab811be91207ca5f4de97407"
        },
        "date": 1719462154239,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09932256160502752,
            "unit": "iter/sec",
            "range": "stddev: 0.051317774914952353",
            "extra": "mean: 10.068205892399998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1272669262861021,
            "unit": "iter/sec",
            "range": "stddev: 0.021973791504745106",
            "extra": "mean: 7.857500995600009 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2efdb61a1be6481467d401d9cf90c15ce1366e7b",
          "message": "Improve TypeError exception message for edge triggers when used on an incompatible signal handle (#3987)",
          "timestamp": "2024-06-27T09:15:43-07:00",
          "tree_id": "b340e15d50f6b883059ebdf88ba4115a6f0ec802",
          "url": "https://github.com/cocotb/cocotb/commit/2efdb61a1be6481467d401d9cf90c15ce1366e7b"
        },
        "date": 1719505188863,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.0971540568169216,
            "unit": "iter/sec",
            "range": "stddev: 0.044963293960404514",
            "extra": "mean: 10.292930967199993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12689492945889316,
            "unit": "iter/sec",
            "range": "stddev: 0.07170366479932289",
            "extra": "mean: 7.880535528600012 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c149dac08f3793771a93474710ad66273f4e2b5f",
          "message": "docs: Add NullTrigger to Python Triggers section (#3991)",
          "timestamp": "2024-06-27T11:49:51-07:00",
          "tree_id": "49041fd0db2ca8b0726faa392f621cb01a88f6c7",
          "url": "https://github.com/cocotb/cocotb/commit/c149dac08f3793771a93474710ad66273f4e2b5f"
        },
        "date": 1719514441371,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09880339277407196,
            "unit": "iter/sec",
            "range": "stddev: 0.06947245073041357",
            "extra": "mean: 10.121109932800005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1273917758623968,
            "unit": "iter/sec",
            "range": "stddev: 0.055638511089502414",
            "extra": "mean: 7.849800297000002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca6a97ff4d6af2ac13d0271cb4f8ed0b01e27627",
          "message": "CI: Use case-insensitive regex match for repr strings that contain handle paths (#3992)\n\nNVC does not have full CaseName support, and so often returns normalized all uppercase names for objects. See #3985 for more details.",
          "timestamp": "2024-06-27T16:24:48-07:00",
          "tree_id": "e5e90a8db9fe1b6274308d97d6914278633c4434",
          "url": "https://github.com/cocotb/cocotb/commit/ca6a97ff4d6af2ac13d0271cb4f8ed0b01e27627"
        },
        "date": 1719530950332,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09304430373894511,
            "unit": "iter/sec",
            "range": "stddev: 0.10422092016022017",
            "extra": "mean: 10.74756819939999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12085984115044766,
            "unit": "iter/sec",
            "range": "stddev: 0.14067226444455075",
            "extra": "mean: 8.274046949599983 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "c386f6aff6946605876cca0ffe4965b42fdff675",
          "message": "Fix unfixable ruff issues",
          "timestamp": "2024-07-04T17:52:41-06:00",
          "tree_id": "a2310b436639db68f410f2e138476602cb346043",
          "url": "https://github.com/cocotb/cocotb/commit/c386f6aff6946605876cca0ffe4965b42fdff675"
        },
        "date": 1720137401527,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09814210142844475,
            "unit": "iter/sec",
            "range": "stddev: 0.07300771634425046",
            "extra": "mean: 10.189306989000011 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12729459421261508,
            "unit": "iter/sec",
            "range": "stddev: 0.08342452171852667",
            "extra": "mean: 7.8557931401999666 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "114fe7a98c03dbd6d768226d24931cdc148cbe73",
          "message": "Riviera-PRO 2019.10 cannot access packages\n\nLater versions work, simply update the test expectations for this\nversion.",
          "timestamp": "2024-07-05T07:12:24+02:00",
          "tree_id": "1ae3a04d8eee73178200f70f1fed8572fd27cc7c",
          "url": "https://github.com/cocotb/cocotb/commit/114fe7a98c03dbd6d768226d24931cdc148cbe73"
        },
        "date": 1720156600105,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09892380630077426,
            "unit": "iter/sec",
            "range": "stddev: 0.1261855101337808",
            "extra": "mean: 10.108790162800005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12793750248827562,
            "unit": "iter/sec",
            "range": "stddev: 0.04933189614276873",
            "extra": "mean: 7.816316408800003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "todd.strader@gmail.com",
            "name": "Todd Strader",
            "username": "toddstrader"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f756f744fdd68eab6006791a9b0399f421f6ad87",
          "message": "Skip mixed_signal example if Spectre is unavailable (#4008)",
          "timestamp": "2024-07-05T19:39:18-06:00",
          "tree_id": "56739522b73f2d966b30127ecbebcbcf3344d66d",
          "url": "https://github.com/cocotb/cocotb/commit/f756f744fdd68eab6006791a9b0399f421f6ad87"
        },
        "date": 1720230203312,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09915434725644058,
            "unit": "iter/sec",
            "range": "stddev: 0.05999924366126099",
            "extra": "mean: 10.085286501999992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12633367321952763,
            "unit": "iter/sec",
            "range": "stddev: 0.10839361336648161",
            "extra": "mean: 7.915545986399991 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "61cb17bb9be5cea7210aeac892e0a645eab7f75e",
          "message": "Pin the version in the stable install docs\n\nWhen building documentation for a tagged release in ReadTheDocs, pin the\nversion we suggest users to install to a version matching the\ndocumentation they are reading.\n\nFor example, a ReadTheDocs build for the v1.9.0 tag would suggest users\nto run \"pip install cocotb =~ 1.9.0\", which gives them a 1.9.x version\nmatching the documentation they are reading.\n\nFor all other Sphinx build types (local builds, PR builds, \"latest\" RTD\nbuilds, etc.), the documentation stays as is: it gives instructions how\nto install the latest stable release (whatever that might be currently),\nand also shows how to install a development release.",
          "timestamp": "2024-07-08T15:42:19+02:00",
          "tree_id": "081ebf50e2b1825b9a44e008d0b197184e65ea92",
          "url": "https://github.com/cocotb/cocotb/commit/61cb17bb9be5cea7210aeac892e0a645eab7f75e"
        },
        "date": 1720446393005,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09705645707169976,
            "unit": "iter/sec",
            "range": "stddev: 0.07272020376892852",
            "extra": "mean: 10.303281514399988 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1255130169130509,
            "unit": "iter/sec",
            "range": "stddev: 0.0679701840555331",
            "extra": "mean: 7.967301118199953 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "8adaf89bb2e6aaf237992a469778fa5420f0e844",
          "message": "Document the current state of Verilator support",
          "timestamp": "2024-07-08T19:27:25+02:00",
          "tree_id": "867c831db8a5b92db27f84b0d3de3a99be527831",
          "url": "https://github.com/cocotb/cocotb/commit/8adaf89bb2e6aaf237992a469778fa5420f0e844"
        },
        "date": 1720459887912,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09922417043829272,
            "unit": "iter/sec",
            "range": "stddev: 0.07186335611308463",
            "extra": "mean: 10.078189573999992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12725633932444064,
            "unit": "iter/sec",
            "range": "stddev: 0.025696512998739696",
            "extra": "mean: 7.858154692400001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "a5ba02f5e4803607d870be08d4c95e11a2a0b254",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.5.0 → v0.5.1](https://github.com/astral-sh/ruff-pre-commit/compare/v0.5.0...v0.5.1)",
          "timestamp": "2024-07-09T13:37:58-06:00",
          "tree_id": "a3d5ecacf0c80a15d63d8d341885dfc5197cf2c5",
          "url": "https://github.com/cocotb/cocotb/commit/a5ba02f5e4803607d870be08d4c95e11a2a0b254"
        },
        "date": 1720554118073,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09869637450968603,
            "unit": "iter/sec",
            "range": "stddev: 0.06932674185799585",
            "extra": "mean: 10.132084435400008 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12765493817110202,
            "unit": "iter/sec",
            "range": "stddev: 0.013182307816882352",
            "extra": "mean: 7.833617831999982 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "d8ed8bc9ef68f661e20f77c23510e1e4dcb8115e",
          "message": "Address GHDL sim issue gh-4004",
          "timestamp": "2024-07-10T12:34:56-06:00",
          "tree_id": "c328e6061bdb1a5621792aa3918d43eec39c67a0",
          "url": "https://github.com/cocotb/cocotb/commit/d8ed8bc9ef68f661e20f77c23510e1e4dcb8115e"
        },
        "date": 1720636804508,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09825462033463021,
            "unit": "iter/sec",
            "range": "stddev: 0.0741915177137068",
            "extra": "mean: 10.177638431600007 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12658406489302032,
            "unit": "iter/sec",
            "range": "stddev: 0.09103956645568412",
            "extra": "mean: 7.8998885115999995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8fce237d2a1419b26115850bcca93ce3f399e8b",
          "message": "Merge pull request #4023 from ktbarrett/split-utils\n\nSplit `cocotb.utils`",
          "timestamp": "2024-07-11T09:17:56-06:00",
          "tree_id": "6f4e88791d159cf7352a825b99cf5dd075e8dd83",
          "url": "https://github.com/cocotb/cocotb/commit/c8fce237d2a1419b26115850bcca93ce3f399e8b"
        },
        "date": 1720711328121,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09877439212727744,
            "unit": "iter/sec",
            "range": "stddev: 0.10669781501219724",
            "extra": "mean: 10.124081540399994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.127259699581591,
            "unit": "iter/sec",
            "range": "stddev: 0.07898758710830991",
            "extra": "mean: 7.857947199999967 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "eb49d69f2f841708b56cf48eb668bf3b86a1e771",
          "message": "Correct broken import in cocotb/__init__.py",
          "timestamp": "2024-07-11T10:24:15-06:00",
          "tree_id": "b35a20eb3d1462ab8c8aaf165cfe374e8258a8bb",
          "url": "https://github.com/cocotb/cocotb/commit/eb49d69f2f841708b56cf48eb668bf3b86a1e771"
        },
        "date": 1720715328057,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09790124253606647,
            "unit": "iter/sec",
            "range": "stddev: 0.08007085337833089",
            "extra": "mean: 10.214374956799997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12639537555605382,
            "unit": "iter/sec",
            "range": "stddev: 0.11963180707291055",
            "extra": "mean: 7.911681860200019 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "36da975c58cd93ec96c3ddcd3ef1ad4ec5500600",
          "message": "Remove `TriggerException` (#4024)",
          "timestamp": "2024-07-11T13:45:45-06:00",
          "tree_id": "694dcab64a7fe61f6a3305ba2068af7a5aeae3c6",
          "url": "https://github.com/cocotb/cocotb/commit/36da975c58cd93ec96c3ddcd3ef1ad4ec5500600"
        },
        "date": 1720727391701,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09827025326769367,
            "unit": "iter/sec",
            "range": "stddev: 0.10880486022093379",
            "extra": "mean: 10.176019362399973 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12630162359206842,
            "unit": "iter/sec",
            "range": "stddev: 0.04607230803790213",
            "extra": "mean: 7.917554593200009 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bb58d3d56b42e4ddd1c8de2f05f159a61c5353e3",
          "message": "Cleanup `cocotb_tools.runner` (#4025)\n\n* Add typing support to cocotb_tools\r\n* Improve typing\r\n* Rename cocotb.runner.Simulator to cocotb.runner.Runner\r\n* Document the limitations of each Runner implementation.\r\n* Remove experimental warning\r\n* Replace prints with logs or exceptions\r\n* Cleanup newsfrags\r\n* Add newsfrag about renaming base class\r\n* Remove `raise NotImplementedError` and use `@abstractmethod`",
          "timestamp": "2024-07-11T21:31:47-06:00",
          "tree_id": "f5bfe5e84ee0bd9387ec6a7d33f6664e804a55f6",
          "url": "https://github.com/cocotb/cocotb/commit/bb58d3d56b42e4ddd1c8de2f05f159a61c5353e3"
        },
        "date": 1720755379237,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.0985670333056509,
            "unit": "iter/sec",
            "range": "stddev: 0.08031706427981515",
            "extra": "mean: 10.1453799152 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12614909426946472,
            "unit": "iter/sec",
            "range": "stddev: 0.05942257976673661",
            "extra": "mean: 7.927127862400016 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "xdch47@posteo.de",
            "name": "Felix Neumärker",
            "username": "xdch47"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "a7f1b459c74974b5bb107ffae77d91eb75284d76",
          "message": "Use Verilator coverage filename.\n\nSupported since verilator v5.022.\n(Since https://github.com/verilator/verilator/commit/1a9250278825f383efe8d6ef15b55c477e6723e5)",
          "timestamp": "2024-07-12T10:11:17-06:00",
          "tree_id": "d95fb00c10f0c53f7faf01d71411aa8bad2bcf9a",
          "url": "https://github.com/cocotb/cocotb/commit/a7f1b459c74974b5bb107ffae77d91eb75284d76"
        },
        "date": 1720800963178,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09830925948279173,
            "unit": "iter/sec",
            "range": "stddev: 0.09066898807180292",
            "extra": "mean: 10.171981817999983 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12673041869814552,
            "unit": "iter/sec",
            "range": "stddev: 0.13843463999686612",
            "extra": "mean: 7.890765376399986 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "distinct": true,
          "id": "25820af64cd8915e2d530892490aae13e4203d9a",
          "message": "docs: re-order the Python Code Library Reference page",
          "timestamp": "2024-07-12T14:20:07-07:00",
          "tree_id": "f7850929d4865455ca0b43ace386087ad970e878",
          "url": "https://github.com/cocotb/cocotb/commit/25820af64cd8915e2d530892490aae13e4203d9a"
        },
        "date": 1720819465207,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09836966888990163,
            "unit": "iter/sec",
            "range": "stddev: 0.011363431207297998",
            "extra": "mean: 10.16573514260001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1261113231135775,
            "unit": "iter/sec",
            "range": "stddev: 0.0687217027557363",
            "extra": "mean: 7.9295020884 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "a5c90e3342d7a5c956476d2c5f896206877dd143",
          "message": "Move SimTimeoutError to cocotb.triggers",
          "timestamp": "2024-07-12T16:10:35-06:00",
          "tree_id": "aeb5ec8d0166ca2d59798015c21df14148a02d9d",
          "url": "https://github.com/cocotb/cocotb/commit/a5c90e3342d7a5c956476d2c5f896206877dd143"
        },
        "date": 1720822539618,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09777420835500353,
            "unit": "iter/sec",
            "range": "stddev: 0.09824314856784833",
            "extra": "mean: 10.227646092199995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12741287602014456,
            "unit": "iter/sec",
            "range": "stddev: 0.06451925108233496",
            "extra": "mean: 7.84850033399996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "c4b9a2696971ca78471ff09708bed1c06b16866a",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.5.1 → v0.5.2](https://github.com/astral-sh/ruff-pre-commit/compare/v0.5.1...v0.5.2)",
          "timestamp": "2024-07-15T17:57:17-06:00",
          "tree_id": "a69c31f39283d72a9afbd2223566a01152c61e8c",
          "url": "https://github.com/cocotb/cocotb/commit/c4b9a2696971ca78471ff09708bed1c06b16866a"
        },
        "date": 1721088093453,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09765074672051664,
            "unit": "iter/sec",
            "range": "stddev: 0.05704068696690391",
            "extra": "mean: 10.240577093200022 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1271330760281972,
            "unit": "iter/sec",
            "range": "stddev: 0.10120833488896612",
            "extra": "mean: 7.865773654200007 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "e70a6804d884b3e3df1a4b045900143d2133dfb9",
          "message": "Renable checks in test_array following upstream fixes to Xcelium",
          "timestamp": "2024-07-16T14:12:03-06:00",
          "tree_id": "1b8fa270e1923c8df66339ab19075dca4d259c2c",
          "url": "https://github.com/cocotb/cocotb/commit/e70a6804d884b3e3df1a4b045900143d2133dfb9"
        },
        "date": 1721160977293,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09856045063700111,
            "unit": "iter/sec",
            "range": "stddev: 0.04894022434522015",
            "extra": "mean: 10.146057506200004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.126733956503596,
            "unit": "iter/sec",
            "range": "stddev: 0.08206337319492979",
            "extra": "mean: 7.890545104000012 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "e2d50301d2559089638e83b4c3d6987730711b7b",
          "message": "Fix typing on __iter__ in handle.py",
          "timestamp": "2024-07-16T20:01:49-06:00",
          "tree_id": "2032e6ca2eb7a4fabdcafd5dfd2f1376e4fc1658",
          "url": "https://github.com/cocotb/cocotb/commit/e2d50301d2559089638e83b4c3d6987730711b7b"
        },
        "date": 1721182019685,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07190552037335377,
            "unit": "iter/sec",
            "range": "stddev: 0.044488872751215935",
            "extra": "mean: 13.90713807239997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.0859616536539962,
            "unit": "iter/sec",
            "range": "stddev: 0.06913246556704943",
            "extra": "mean: 11.633094030799999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "9ab36d0ea0911fa520bcab8d596efaae22a7c37c",
          "message": "Remove cocotb.result.SimFailure",
          "timestamp": "2024-07-16T20:05:06-06:00",
          "tree_id": "97453119f58b42f8deb736710a1317764eb4116b",
          "url": "https://github.com/cocotb/cocotb/commit/9ab36d0ea0911fa520bcab8d596efaae22a7c37c"
        },
        "date": 1721182545482,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07203813099851057,
            "unit": "iter/sec",
            "range": "stddev: 0.12742474185823655",
            "extra": "mean: 13.881537265600013 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.0857693838076481,
            "unit": "iter/sec",
            "range": "stddev: 0.1611570337633643",
            "extra": "mean: 11.659172021599966 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "c73faab32f7c3415268785f5bbfb02b58d1771f1",
          "message": "Add done_callback interface to cocotb.task.Task",
          "timestamp": "2024-07-17T09:37:08-06:00",
          "tree_id": "a710baaa60a798c428713ceb54840e5324ae94a4",
          "url": "https://github.com/cocotb/cocotb/commit/c73faab32f7c3415268785f5bbfb02b58d1771f1"
        },
        "date": 1721230949328,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07212975472714962,
            "unit": "iter/sec",
            "range": "stddev: 0.07897889108935366",
            "extra": "mean: 13.863904068200032 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08570871773902371,
            "unit": "iter/sec",
            "range": "stddev: 0.08655220188678425",
            "extra": "mean: 11.667424579199997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ola.groettvik@cern.ch",
            "name": "Ola Groettvik"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "870c5f09854a94415c4068631787c36975499377",
          "message": "Fix inconsistent use of acom_args/vcom_args",
          "timestamp": "2024-07-17T09:58:23-06:00",
          "tree_id": "020446a8b8a556830152efa945954011a8978817",
          "url": "https://github.com/cocotb/cocotb/commit/870c5f09854a94415c4068631787c36975499377"
        },
        "date": 1721232209558,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07204276656792954,
            "unit": "iter/sec",
            "range": "stddev: 0.09274334744967379",
            "extra": "mean: 13.880644062399995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08598722988570236,
            "unit": "iter/sec",
            "range": "stddev: 0.07690182267149102",
            "extra": "mean: 11.629633857600016 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gilbertoabram@tersatech.com",
            "name": "gilbertoabram",
            "username": "gilbertoabram"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b43a4b89fbb9dad6e6eb25d351b7c195b2051a95",
          "message": "GpiClock: C++ clock implementation using GPI. (#3983)\n\nCo-authored-by: Gilberto Abram <gilberto@hudson-trading.com>",
          "timestamp": "2024-07-17T12:37:46-06:00",
          "tree_id": "384165e909c869b99086e4e6937dc664b954916c",
          "url": "https://github.com/cocotb/cocotb/commit/b43a4b89fbb9dad6e6eb25d351b7c195b2051a95"
        },
        "date": 1721241780465,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07157412636231746,
            "unit": "iter/sec",
            "range": "stddev: 0.07228038004835169",
            "extra": "mean: 13.971529249800005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.0878669152026883,
            "unit": "iter/sec",
            "range": "stddev: 0.04801967390436086",
            "extra": "mean: 11.380847929999993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "904016301@qq.com",
            "name": "Zhe Li",
            "username": "AtaraxiaZ"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "b7f79ebf3be59d00ce8963ea41e5dedf45ec167d",
          "message": "Replace deprecated VCS options",
          "timestamp": "2024-07-17T21:07:39-06:00",
          "tree_id": "0cace078e60155970af99d12c67244f5954430c5",
          "url": "https://github.com/cocotb/cocotb/commit/b7f79ebf3be59d00ce8963ea41e5dedf45ec167d"
        },
        "date": 1721272363093,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.0722089674615158,
            "unit": "iter/sec",
            "range": "stddev: 0.12438714224076708",
            "extra": "mean: 13.848695462000006 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08763806125605215,
            "unit": "iter/sec",
            "range": "stddev: 0.13288980857183433",
            "extra": "mean: 11.410567345599986 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "0279f1bb997f5fe4173a24679fc1bd148d4e373a",
          "message": "Call done callback immediately if registering on finished Task\n\nAlso, we make this interface private. Also remove the\nremove_done_callback since we don't use it privately.",
          "timestamp": "2024-07-17T22:24:21-06:00",
          "tree_id": "816599b581c78950a4b3b5f312ec48256c8c608c",
          "url": "https://github.com/cocotb/cocotb/commit/0279f1bb997f5fe4173a24679fc1bd148d4e373a"
        },
        "date": 1721276960968,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07203323202332745,
            "unit": "iter/sec",
            "range": "stddev: 0.08701430407587771",
            "extra": "mean: 13.882481348000004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08726551861590034,
            "unit": "iter/sec",
            "range": "stddev: 0.04067347006880514",
            "extra": "mean: 11.459279860599986 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "19c7518cfd513bd80c4c95d0e5b39dfa67c38373",
          "message": "Add color to CI",
          "timestamp": "2024-07-18T12:52:27-06:00",
          "tree_id": "b24331f157226528a27960989eba61bef625f9a4",
          "url": "https://github.com/cocotb/cocotb/commit/19c7518cfd513bd80c4c95d0e5b39dfa67c38373"
        },
        "date": 1721329047228,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.0719817946975592,
            "unit": "iter/sec",
            "range": "stddev: 0.11556083117337025",
            "extra": "mean: 13.892401602400009 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08724492156217536,
            "unit": "iter/sec",
            "range": "stddev: 0.07080068434980615",
            "extra": "mean: 11.461985203200015 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "7dca73093c61e013511bbdbd8f694a33eb72b5ad",
          "message": "Move cocotb.ipython_support to cocotb_tools.ipython_support",
          "timestamp": "2024-07-18T13:06:01-06:00",
          "tree_id": "2dd8c7887011b27b25f50294861d24375a48baa2",
          "url": "https://github.com/cocotb/cocotb/commit/7dca73093c61e013511bbdbd8f694a33eb72b5ad"
        },
        "date": 1721329895682,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07178504944758676,
            "unit": "iter/sec",
            "range": "stddev: 0.12903316558797612",
            "extra": "mean: 13.930477274799978 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08743842931604706,
            "unit": "iter/sec",
            "range": "stddev: 0.07403727011068617",
            "extra": "mean: 11.436618976599982 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "d545d6eca22d8ca15acde60f27a234891acad80d",
          "message": "Remove IndexableValueObjectBase\n\nSplits \"rangeable\" methods off into RangeableObjectMixin. This includes\nthings like __len__, range, left, right, direction, etc. This is used\nfor HierarchyArrayObjects, ArrayObjects, LogicObjects, and\nStringObjects.\n\nIndexableValueObjectBase was then removed, replacing the functionality\nwith the aforementioned mixin and with purpose-built methods. This\nremoves indexability as a feature from StringObject and LogicObject,\nwhich were poorly supported beforehand.",
          "timestamp": "2024-07-18T23:02:07-06:00",
          "tree_id": "a033b7b9388958572b36a674a2b9893c48e18b41",
          "url": "https://github.com/cocotb/cocotb/commit/d545d6eca22d8ca15acde60f27a234891acad80d"
        },
        "date": 1721365636632,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07191882133848135,
            "unit": "iter/sec",
            "range": "stddev: 0.10351789234936454",
            "extra": "mean: 13.904566028599993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08779331908017762,
            "unit": "iter/sec",
            "range": "stddev: 0.1542866071335321",
            "extra": "mean: 11.390388362999989 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "eb1e9236ece3d95a3852ee2ae5b7712bd74b780f",
          "message": "Change timeouts in CI\n\nRemove timeout on Windows testing. I haven't seen issues with that in a while. Add timeout to Windows Icarus build since those often hang indefinitely, but if it finishes, it takes less than 5 minutes. And bump timeout on Linux testing because old Riviera version in the extended CI are just *barely* not finishing in time.",
          "timestamp": "2024-07-22T09:45:48-06:00",
          "tree_id": "8f28d3779b35b198e9b3e535491c2b7112f598fd",
          "url": "https://github.com/cocotb/cocotb/commit/eb1e9236ece3d95a3852ee2ae5b7712bd74b780f"
        },
        "date": 1721663448646,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07302267713266572,
            "unit": "iter/sec",
            "range": "stddev: 0.1713062548679851",
            "extra": "mean: 13.694376038599978 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08862780716914014,
            "unit": "iter/sec",
            "range": "stddev: 0.0585470474798809",
            "extra": "mean: 11.283140494400005 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04bb4682f723431c5858735c74c01c21308623c9",
          "message": "Move writes flushing into `scheduler._react` method (#4055)\n\nA single step towards and proof that moving this into a\r\ntrigger-specific react method would work.\r\n\r\nThis moves the write scheduler into a global module.\r\n\r\nWrites are applied when the ReadWrite trigger calls into the scheduler's\r\n`_react`, meaning we don't have to force the old `_do_writes` task to\r\nrun first with special logic in the simulator.",
          "timestamp": "2024-07-22T14:52:14-06:00",
          "tree_id": "879d03ca389800f99a49cc23b30bb4cb9ef2cdb9",
          "url": "https://github.com/cocotb/cocotb/commit/04bb4682f723431c5858735c74c01c21308623c9"
        },
        "date": 1721681842009,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07151253538233275,
            "unit": "iter/sec",
            "range": "stddev: 0.16813224609304153",
            "extra": "mean: 13.983562387400003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08787630194096926,
            "unit": "iter/sec",
            "range": "stddev: 0.12418270866520575",
            "extra": "mean: 11.379632254800025 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "221fefd3e7997ed09c5e7bff228496f0db1c4f7d",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.5.2 → v0.5.4](https://github.com/astral-sh/ruff-pre-commit/compare/v0.5.2...v0.5.4)",
          "timestamp": "2024-07-22T18:18:57-06:00",
          "tree_id": "2a9be3f00c92c33cf0dfa14917d008c89924491f",
          "url": "https://github.com/cocotb/cocotb/commit/221fefd3e7997ed09c5e7bff228496f0db1c4f7d"
        },
        "date": 1721694237021,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07243697870296635,
            "unit": "iter/sec",
            "range": "stddev: 0.13417985912174446",
            "extra": "mean: 13.805103662600015 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08944625214113486,
            "unit": "iter/sec",
            "range": "stddev: 0.07867176090885612",
            "extra": "mean: 11.179898274800006 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ray@raysalemi.com",
            "name": "Ray Salemi",
            "username": "raysalemi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0bf26136ba4a3f22a249c49efc74c61c400b0369",
          "message": "Add pyuvm to ecosystem test (#4062)",
          "timestamp": "2024-07-23T11:55:16-06:00",
          "tree_id": "5a9bfdc51719f33cf35109e3786fee37e2911e9c",
          "url": "https://github.com/cocotb/cocotb/commit/0bf26136ba4a3f22a249c49efc74c61c400b0369"
        },
        "date": 1721757632298,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07217868619348469,
            "unit": "iter/sec",
            "range": "stddev: 0.060653418816616816",
            "extra": "mean: 13.8545054328 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08729251322613181,
            "unit": "iter/sec",
            "range": "stddev: 0.1346859759342296",
            "extra": "mean: 11.455736157000013 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5672e517393c9a2fc1a91996d7610a5e36e4c5a2",
          "message": "Rename `cocotb.external` and `cocotb.function` (#4054)\n\nRenamed to cocotb.bridge and cocotb.resume, respectively. This was done\r\nbecause the two are intended to be used in conjunction to bridge\r\ncocotb's scheduler through non-async code. cocotb.bridge is thus\r\nobvious, and cocotb.resume is \"resuming\" the cocotb context.",
          "timestamp": "2024-07-24T07:42:59-06:00",
          "tree_id": "7e3b60404f3bf9da477b23e7c0482700e5ef8ada",
          "url": "https://github.com/cocotb/cocotb/commit/5672e517393c9a2fc1a91996d7610a5e36e4c5a2"
        },
        "date": 1721828885513,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07248664650574038,
            "unit": "iter/sec",
            "range": "stddev: 0.10027881444318178",
            "extra": "mean: 13.795644414599973 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08815844852476099,
            "unit": "iter/sec",
            "range": "stddev: 0.08160990247145679",
            "extra": "mean: 11.343212326599996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "93b91efb5cdd8285fde20fd5f0d43cdeef9c6f65",
          "message": "Move profiling out of scheduler (#4061)",
          "timestamp": "2024-07-24T20:35:24-06:00",
          "tree_id": "4f21b2b71e9934ce718cd2a021ae33cc72e4616e",
          "url": "https://github.com/cocotb/cocotb/commit/93b91efb5cdd8285fde20fd5f0d43cdeef9c6f65"
        },
        "date": 1721875227338,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07300484894887908,
            "unit": "iter/sec",
            "range": "stddev: 0.15378829849753117",
            "extra": "mean: 13.69772028020002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08968136239133748,
            "unit": "iter/sec",
            "range": "stddev: 0.016344591101375493",
            "extra": "mean: 11.150588855199999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus@notsyncing.net",
            "name": "Markus Koch",
            "username": "m42uko"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "6ba2b351f110dbb058e5506714ed58782b32797d",
          "message": "pytest: nvc: Add build_dir to library search paths\n\nWithout this argument, NVC does not find any of the locally compiled\nlibraries.",
          "timestamp": "2024-07-25T13:21:49-06:00",
          "tree_id": "9d42c6da6267f728d705d0598029395561b20c6e",
          "url": "https://github.com/cocotb/cocotb/commit/6ba2b351f110dbb058e5506714ed58782b32797d"
        },
        "date": 1721935609292,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07278471859947618,
            "unit": "iter/sec",
            "range": "stddev: 0.27262891077156076",
            "extra": "mean: 13.739147711800001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08909066923378518,
            "unit": "iter/sec",
            "range": "stddev: 0.06610312505753699",
            "extra": "mean: 11.22452001539997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "49a9f19e31df31963cc5ad6ccf5c365dd0d5bbd0",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.5.4 → v0.5.5](https://github.com/astral-sh/ruff-pre-commit/compare/v0.5.4...v0.5.5)\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.07.01 → 2024.07.29](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.07.01...2024.07.29)",
          "timestamp": "2024-07-29T16:47:40-06:00",
          "tree_id": "947b434f8c5c33158f4b36defeb50eb9afec7450",
          "url": "https://github.com/cocotb/cocotb/commit/49a9f19e31df31963cc5ad6ccf5c365dd0d5bbd0"
        },
        "date": 1722293560481,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07303073705790872,
            "unit": "iter/sec",
            "range": "stddev: 0.14009347058595653",
            "extra": "mean: 13.69286467980001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08901687693200828,
            "unit": "iter/sec",
            "range": "stddev: 0.07391025118089471",
            "extra": "mean: 11.233824803400001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "722520b1726de834e8133e57f730c76b9388bb54",
          "message": "Use vpiInertialDelay when setting string value on sims that support it",
          "timestamp": "2024-07-30T08:31:14-06:00",
          "tree_id": "be081bb5d37c0c7c0a02d8af828c5a3248d96079",
          "url": "https://github.com/cocotb/cocotb/commit/722520b1726de834e8133e57f730c76b9388bb54"
        },
        "date": 1722350177666,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07245501997348572,
            "unit": "iter/sec",
            "range": "stddev: 0.08342321672356473",
            "extra": "mean: 13.801666197400005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.0890497464860417,
            "unit": "iter/sec",
            "range": "stddev: 0.03607360950686562",
            "extra": "mean: 11.2296782356 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0652ade90d8d75f8d21e11d4fbb72077dcb50535",
          "message": "Remove the `data` field from `Event` (#4079)",
          "timestamp": "2024-07-30T10:03:57-06:00",
          "tree_id": "9dad66431cd2d091d0096eafeb304f2373022153",
          "url": "https://github.com/cocotb/cocotb/commit/0652ade90d8d75f8d21e11d4fbb72077dcb50535"
        },
        "date": 1722355849758,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07347825887311007,
            "unit": "iter/sec",
            "range": "stddev: 0.07081364261189367",
            "extra": "mean: 13.609467825399951 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08956351345458854,
            "unit": "iter/sec",
            "range": "stddev: 0.03954064306828005",
            "extra": "mean: 11.165260957600003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ray@raysalemi.com",
            "name": "Ray Salemi",
            "username": "raysalemi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fff3818ea7a1e423b04dc80aa3010cb0d540a25",
          "message": "Added pyuvm references to README.md (#4076)",
          "timestamp": "2024-07-30T17:52:06-06:00",
          "tree_id": "3052c6e583507d661d68af95430b7fa61a52a983",
          "url": "https://github.com/cocotb/cocotb/commit/2fff3818ea7a1e423b04dc80aa3010cb0d540a25"
        },
        "date": 1722383830301,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.0727278187084956,
            "unit": "iter/sec",
            "range": "stddev: 0.20742213391952688",
            "extra": "mean: 13.749896776199979 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08946005336996661,
            "unit": "iter/sec",
            "range": "stddev: 0.06906252895325062",
            "extra": "mean: 11.178173523599957 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "af30a2f2bb7b9584124e736316cfba8b3a34daf5",
          "message": "Make sphinx not generate bogus undocumented return type in autoclass",
          "timestamp": "2024-08-01T10:08:20-06:00",
          "tree_id": "58f736a509a946c09a0860ef871c35311c5a53a4",
          "url": "https://github.com/cocotb/cocotb/commit/af30a2f2bb7b9584124e736316cfba8b3a34daf5"
        },
        "date": 1722528819333,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.0729207054552897,
            "unit": "iter/sec",
            "range": "stddev: 0.06314803829093599",
            "extra": "mean: 13.713526134400002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.0886057379071462,
            "unit": "iter/sec",
            "range": "stddev: 0.06897764672851131",
            "extra": "mean: 11.28595081560004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da13315b7ca5cc04594aee773ece83efa2c7a9da",
          "message": "Guard VHDL-specific option in Xcelium Python runner. (#4085)\n\nGuards addition of `-NEW_VHPI_PROPAGATE_DELAY` on whether VHDL sources are present.",
          "timestamp": "2024-08-05T15:45:21-06:00",
          "tree_id": "c226a791e616c375ddf33d1e83a12a311710206a",
          "url": "https://github.com/cocotb/cocotb/commit/da13315b7ca5cc04594aee773ece83efa2c7a9da"
        },
        "date": 1722894625512,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07280102709944113,
            "unit": "iter/sec",
            "range": "stddev: 0.08154039084778146",
            "extra": "mean: 13.736069940800007 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08899332698166335,
            "unit": "iter/sec",
            "range": "stddev: 0.087922303599429",
            "extra": "mean: 11.236797565800021 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "8d6c1a63a39aa9f204acdf9bf429e7ec93b02ab2",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.5.5 → v0.5.6](https://github.com/astral-sh/ruff-pre-commit/compare/v0.5.5...v0.5.6)",
          "timestamp": "2024-08-05T20:09:51-06:00",
          "tree_id": "9190a6bace3abe8e1309b6e4052875ffba6b4906",
          "url": "https://github.com/cocotb/cocotb/commit/8d6c1a63a39aa9f204acdf9bf429e7ec93b02ab2"
        },
        "date": 1722910487112,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07224025700262368,
            "unit": "iter/sec",
            "range": "stddev: 0.11138081383697597",
            "extra": "mean: 13.842697153800009 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08914966234286177,
            "unit": "iter/sec",
            "range": "stddev: 0.06832176545896862",
            "extra": "mean: 11.217092400799993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "875ca3630ca7613a1740e66e1e6026a15a81fceb",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.5.6 → v0.5.7](https://github.com/astral-sh/ruff-pre-commit/compare/v0.5.6...v0.5.7)\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.07.29 → 2024.08.08](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.07.29...2024.08.08)",
          "timestamp": "2024-08-12T22:11:51-05:00",
          "tree_id": "fcc8b94eed92b72b65e45660dedd9ae0597cf6df",
          "url": "https://github.com/cocotb/cocotb/commit/875ca3630ca7613a1740e66e1e6026a15a81fceb"
        },
        "date": 1723519009154,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07281673625276606,
            "unit": "iter/sec",
            "range": "stddev: 0.14380470915274063",
            "extra": "mean: 13.733106583200003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08906493510830354,
            "unit": "iter/sec",
            "range": "stddev: 0.08048816472773353",
            "extra": "mean: 11.227763190799987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "579bfa682cf9ec76646654fc8c7544d812c0cfc1",
          "message": "Deprecate Join() and task.join()\n\nThis reintroduces old behavior which was changed and silently caused error\npropagation to stop. It also deprecates the Join trigger and\ntask.join().\n\nIn asyncio, which we are trying to align with, Tasks are Futures (known\nin cocotb as Triggers). There is no separate Future object for each\nTrigger firing. So Tasks are passed directly where any Future is\nexpected. Similarly, cocotb currently supports passing Tasks directly\nwherever Triggers are expected. Removing Join from the public API forces\nusers to pass Tasks directly instead of Join triggers which should align\ntheir code with the asyncio-like model we are converging on.",
          "timestamp": "2024-08-13T11:39:40-05:00",
          "tree_id": "ba326671cdcac215ee5b269ac9232766c385178b",
          "url": "https://github.com/cocotb/cocotb/commit/579bfa682cf9ec76646654fc8c7544d812c0cfc1"
        },
        "date": 1723567476723,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07290128343894424,
            "unit": "iter/sec",
            "range": "stddev: 0.09244058061810705",
            "extra": "mean: 13.717179627400014 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08896296706891914,
            "unit": "iter/sec",
            "range": "stddev: 0.07104053436831223",
            "extra": "mean: 11.240632287199968 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1929837457788935c6c1f87cb3bc7c0108e442ff",
          "message": "Update build following change to setuptools/distutils (#4095)\n\n* Set CXXFLAGS appropriately now that they are being used\r\n* Update LDCXXSHARED variable now that it is being used\r\n* Add verbose switch when compiling cocotb for testing purposes",
          "timestamp": "2024-08-13T12:50:22-06:00",
          "tree_id": "aacb07cdd9a6bb2a0a15ec852e68317c9ed4285b",
          "url": "https://github.com/cocotb/cocotb/commit/1929837457788935c6c1f87cb3bc7c0108e442ff"
        },
        "date": 1723575320588,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07280050856487724,
            "unit": "iter/sec",
            "range": "stddev: 0.1530639507791111",
            "extra": "mean: 13.736167778399999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08914508519171567,
            "unit": "iter/sec",
            "range": "stddev: 0.12811615082466796",
            "extra": "mean: 11.217668341999978 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "4bd80db144b5a2a6e9e9e43f15bbf51a8f524649",
          "message": "Support SIM_ARGS in Verilator Makefile\n\nAlso, adds --trace to SIM_ARGS if VERILATOR_TRACE is set.",
          "timestamp": "2024-08-14T10:32:10-05:00",
          "tree_id": "ea46fa88557ecfc4cc9ff7e95a51259b116b3174",
          "url": "https://github.com/cocotb/cocotb/commit/4bd80db144b5a2a6e9e9e43f15bbf51a8f524649"
        },
        "date": 1723649833566,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07310474253751056,
            "unit": "iter/sec",
            "range": "stddev: 0.09513966850548795",
            "extra": "mean: 13.679003102799971 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08942322244437577,
            "unit": "iter/sec",
            "range": "stddev: 0.06949361277503997",
            "extra": "mean: 11.182777500800011 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "f930bc77f239f4556371a1d5ea4cad8bb2349565",
          "message": "Don't attempt to reuse value change callbacks",
          "timestamp": "2024-08-15T00:10:31-05:00",
          "tree_id": "916f663ce909441d55db211ec67c915614c1439f",
          "url": "https://github.com/cocotb/cocotb/commit/f930bc77f239f4556371a1d5ea4cad8bb2349565"
        },
        "date": 1723698924284,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07369234939965384,
            "unit": "iter/sec",
            "range": "stddev: 0.12276205245175335",
            "extra": "mean: 13.569929689399988 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08935863290562934,
            "unit": "iter/sec",
            "range": "stddev: 0.12009624859115119",
            "extra": "mean: 11.1908605524 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "6c3ce100aecaf70dc57bf72d9b7ae54d3fa4be7b",
          "message": "Remove __slots__ from cocotb.types\n\n__slots__ wasn't working on Array since it's base class didn't have\n__slots__. And __slots__ in general is being discouraged as it prevents\nthings like caching and the actual performance gain is totally\nnegligible due to improvements to dictionaries and attribute access in\nrecent versions of Python.",
          "timestamp": "2024-08-15T14:06:15-05:00",
          "tree_id": "8042af49c0520f375c5c80e27a70b3207c0b9e4b",
          "url": "https://github.com/cocotb/cocotb/commit/6c3ce100aecaf70dc57bf72d9b7ae54d3fa4be7b"
        },
        "date": 1723749039650,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10617343344135584,
            "unit": "iter/sec",
            "range": "stddev: 0.045732558891535185",
            "extra": "mean: 9.418551963399988 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.13939574607094588,
            "unit": "iter/sec",
            "range": "stddev: 0.09748291516634632",
            "extra": "mean: 7.173820063999995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "3da515f61bddf58a8eef757041ff1dd6ab17c23f",
          "message": "Rename cocotb.sim_time_utils back to cocotb.utils",
          "timestamp": "2024-08-18T10:43:17-05:00",
          "tree_id": "f5794c64034372fa28e74f9403adae69885e7d97",
          "url": "https://github.com/cocotb/cocotb/commit/3da515f61bddf58a8eef757041ff1dd6ab17c23f"
        },
        "date": 1723996037391,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10672374914629029,
            "unit": "iter/sec",
            "range": "stddev: 0.08682724308524206",
            "extra": "mean: 9.369985668599986 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.13856934462756904,
            "unit": "iter/sec",
            "range": "stddev: 0.12427098508015617",
            "extra": "mean: 7.2166033742000195 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "9b4f74ce732dc15907e7967b36a14149947dd34b",
          "message": "Improved typing (borrowed from typeshed)",
          "timestamp": "2024-08-18T15:36:06-05:00",
          "tree_id": "37c767c6fbe1a838d68d36b8194bd486511e572f",
          "url": "https://github.com/cocotb/cocotb/commit/9b4f74ce732dc15907e7967b36a14149947dd34b"
        },
        "date": 1724013602192,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10634902178169459,
            "unit": "iter/sec",
            "range": "stddev: 0.05250546804871375",
            "extra": "mean: 9.40300139339999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.13967066254556545,
            "unit": "iter/sec",
            "range": "stddev: 0.07001803352185161",
            "extra": "mean: 7.1596996948000085 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "80af976918c236a10773dc16239964525b019e68",
          "message": "Add a GitHub workflow to automatically backport changes\n\nUse the Backport tool, and its associated GitHub action, to\nautomatically perform backports of a pull request to one or multiple\nstable branches.\n\nThe action is controlled through GitHub labels. To backport a PR, assign\nthe `backport-to:VERSION` label to a PR. Once the PR is closed, a new PR\nagainst `stable/VERSION` will be opened by the bot, assuming the git\ncherry-pick was successful. The backport PR will then go through the usual\nround of CI and reviews.\n\nThe `backport-to:VERSION` can be applied multiple times. They can also\nbe applied after a PR has already been merged.\n\nIf an automated backport fails, developers can use the `backport`\ncommand-line tool to perform the backport and potential\nconflict-resolution manually.",
          "timestamp": "2024-08-19T19:18:52+02:00",
          "tree_id": "ac6b51086569fc9725456b5018f3bcd08157336c",
          "url": "https://github.com/cocotb/cocotb/commit/80af976918c236a10773dc16239964525b019e68"
        },
        "date": 1724088198854,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10650481240408995,
            "unit": "iter/sec",
            "range": "stddev: 0.03750778891124771",
            "extra": "mean: 9.389247090599998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.13992467831562683,
            "unit": "iter/sec",
            "range": "stddev: 0.046085587700200825",
            "extra": "mean: 7.146702154599984 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "cd82c8e25d49e8aa4bb1f0a5c2eb30fca8f76eb8",
          "message": "Fix some documentation issues",
          "timestamp": "2024-08-19T20:37:49+02:00",
          "tree_id": "702c962dc37e040c45172933999c4c0f634faf87",
          "url": "https://github.com/cocotb/cocotb/commit/cd82c8e25d49e8aa4bb1f0a5c2eb30fca8f76eb8"
        },
        "date": 1724092907154,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10557836667387287,
            "unit": "iter/sec",
            "range": "stddev: 0.04329646814546547",
            "extra": "mean: 9.471637339199969 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.13947519062414163,
            "unit": "iter/sec",
            "range": "stddev: 0.06390829191514812",
            "extra": "mean: 7.169733882599985 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "479fc9aed9bf1708d289e90b12a42e5a0d842a9b",
          "message": "Use EXTRA_ARGS correctly in Makefile.verilator\n\nEXTRA_ARGS, per the documentation, are flags that are passed to both the compilation and the simulation steps when running a test.",
          "timestamp": "2024-08-19T22:30:55+02:00",
          "tree_id": "ede9d307919a9c7975da5748846884001af7eb33",
          "url": "https://github.com/cocotb/cocotb/commit/479fc9aed9bf1708d289e90b12a42e5a0d842a9b"
        },
        "date": 1724099698284,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10610986863722308,
            "unit": "iter/sec",
            "range": "stddev: 0.03616142235632343",
            "extra": "mean: 9.424194119199978 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.13860661558450643,
            "unit": "iter/sec",
            "range": "stddev: 0.06736638572914486",
            "extra": "mean: 7.214662848400008 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "7585730d24565ec9df02aa9541dc91e0ab877f89",
          "message": "CI: Gate log dumping in backport action\n\nThe log dumping tasks weren't gated by the label check, leading to cases\nwhere no logs were available and the `cat` failed.",
          "timestamp": "2024-08-20T09:25:09+02:00",
          "tree_id": "d96f2492a437b0008c8b76f8c3e6c57eff2c103f",
          "url": "https://github.com/cocotb/cocotb/commit/7585730d24565ec9df02aa9541dc91e0ab877f89"
        },
        "date": 1724138955287,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10613852627794237,
            "unit": "iter/sec",
            "range": "stddev: 0.03916854068053795",
            "extra": "mean: 9.421649565600001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1386990099519703,
            "unit": "iter/sec",
            "range": "stddev: 0.01694040579673863",
            "extra": "mean: 7.209856799599993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "501bfccdfb835b267dcc1e131dd3eb81c146df22",
          "message": "[pre-commit.ci] auto fixes from pre-commit.com hooks\n\nfor more information, see https://pre-commit.ci",
          "timestamp": "2024-08-20T09:27:22+02:00",
          "tree_id": "c13665fc7774d0ff9dd2abe1ec852491a9fd09ae",
          "url": "https://github.com/cocotb/cocotb/commit/501bfccdfb835b267dcc1e131dd3eb81c146df22"
        },
        "date": 1724139241185,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1058966712066684,
            "unit": "iter/sec",
            "range": "stddev: 0.09732816406448946",
            "extra": "mean: 9.443167463200007 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.13637541528182315,
            "unit": "iter/sec",
            "range": "stddev: 0.15700197625345683",
            "extra": "mean: 7.332699943999989 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "e3923df9dcb22feb11e1880cb25effc3ecdb1c8b",
          "message": "Fix incorrect use of lru_cache",
          "timestamp": "2024-08-20T08:56:38-05:00",
          "tree_id": "c917ec0c31905ac82c4273aba929277ca771ac10",
          "url": "https://github.com/cocotb/cocotb/commit/e3923df9dcb22feb11e1880cb25effc3ecdb1c8b"
        },
        "date": 1724162421497,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12233409536625338,
            "unit": "iter/sec",
            "range": "stddev: 0.057033110683461924",
            "extra": "mean: 8.174336001800004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17408902995147824,
            "unit": "iter/sec",
            "range": "stddev: 0.05715037470166385",
            "extra": "mean: 5.744187329199997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "8a0936cf9d3838e900c3667bba5cd0a08d35de27",
          "message": "fix test_forked_exception\n\nRemoving the Warning means the test no longer fails hard.",
          "timestamp": "2024-08-21T14:29:28-05:00",
          "tree_id": "ef364f6b91544916f00e05b72b70f357432909b4",
          "url": "https://github.com/cocotb/cocotb/commit/8a0936cf9d3838e900c3667bba5cd0a08d35de27"
        },
        "date": 1724268782488,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12373384986713301,
            "unit": "iter/sec",
            "range": "stddev: 0.02103706309090331",
            "extra": "mean: 8.081862813399994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17528101766320756,
            "unit": "iter/sec",
            "range": "stddev: 0.03549587294551191",
            "extra": "mean: 5.70512433880001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9b07ceaba30aaae36c59541518116579d68a9673",
          "message": "Add tests for moving to ReadOnly from various time phases (#4121)",
          "timestamp": "2024-08-21T15:14:36-06:00",
          "tree_id": "e8c18aa2e38e80df07ae702b28dd4daa727f4ee0",
          "url": "https://github.com/cocotb/cocotb/commit/9b07ceaba30aaae36c59541518116579d68a9673"
        },
        "date": 1724275102927,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12428737012529632,
            "unit": "iter/sec",
            "range": "stddev: 0.03522966524079339",
            "extra": "mean: 8.045869817599987 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17708333531924836,
            "unit": "iter/sec",
            "range": "stddev: 0.07464417815313379",
            "extra": "mean: 5.647058760200025 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "d211018226edcc344b86ea3fc5839097498731c6",
          "message": "Add test for cocotb.sim_phase",
          "timestamp": "2024-08-21T17:38:46-05:00",
          "tree_id": "f74a9197a91cc242f5302881c7e5170e93425b7f",
          "url": "https://github.com/cocotb/cocotb/commit/d211018226edcc344b86ea3fc5839097498731c6"
        },
        "date": 1724280140901,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1243202347219024,
            "unit": "iter/sec",
            "range": "stddev: 0.06684216216431106",
            "extra": "mean: 8.043742856799986 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1767377183703173,
            "unit": "iter/sec",
            "range": "stddev: 0.037345398475142025",
            "extra": "mean: 5.658101786199973 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "88d7eee2779409c03e63f372e7d3035ff2372c92",
          "message": "Add test for assigning strings",
          "timestamp": "2024-08-22T10:37:34-05:00",
          "tree_id": "733815a81443164292b20ff83fad2177c6044685",
          "url": "https://github.com/cocotb/cocotb/commit/88d7eee2779409c03e63f372e7d3035ff2372c92"
        },
        "date": 1724341271570,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12498748756198935,
            "unit": "iter/sec",
            "range": "stddev: 0.051068024630091496",
            "extra": "mean: 8.000800876199992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17932154279159987,
            "unit": "iter/sec",
            "range": "stddev: 0.03205736287144674",
            "extra": "mean: 5.576574818799986 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "42dc0cb93c173426469d2f2826f7ce62ddb09ab4",
          "message": "Update minimum supported Verilator and update CI",
          "timestamp": "2024-08-25T12:06:13-05:00",
          "tree_id": "1b35e6950b0246f5121249d310fa76623c98f03a",
          "url": "https://github.com/cocotb/cocotb/commit/42dc0cb93c173426469d2f2826f7ce62ddb09ab4"
        },
        "date": 1724605788162,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12627588742469012,
            "unit": "iter/sec",
            "range": "stddev: 0.048613387144387545",
            "extra": "mean: 7.91916826239999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.18198591665594022,
            "unit": "iter/sec",
            "range": "stddev: 0.059153864702660056",
            "extra": "mean: 5.49493069780001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "f4b355a9f113c4f999aa81883277c20813b16e8e",
          "message": "Remove cocotb.decorators, use cocotb namespace\n\nThere was more than one fully-qualified name for the objects in\ncocotb.decorators, so the more qualified one was removed by making the\nmodule private.",
          "timestamp": "2024-08-25T15:23:19-05:00",
          "tree_id": "e46b7fced1bedd4e921740c1fa3a5eeed68bc476",
          "url": "https://github.com/cocotb/cocotb/commit/f4b355a9f113c4f999aa81883277c20813b16e8e"
        },
        "date": 1724617643563,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12593141427255408,
            "unit": "iter/sec",
            "range": "stddev: 0.08908136949064718",
            "extra": "mean: 7.9408303779999985 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.18232361236166414,
            "unit": "iter/sec",
            "range": "stddev: 0.020272599689745523",
            "extra": "mean: 5.484753110399993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "111ba1863ef2024d2803ef68a01ac5a16e60db52",
          "message": "Emit TypeError if invalid type used when constructing Logic",
          "timestamp": "2024-08-25T16:49:15-05:00",
          "tree_id": "579e2e44f94ab01c0f47ad83a7c2348e6f8b4742",
          "url": "https://github.com/cocotb/cocotb/commit/111ba1863ef2024d2803ef68a01ac5a16e60db52"
        },
        "date": 1724622768261,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12606884574750452,
            "unit": "iter/sec",
            "range": "stddev: 0.050723998637228936",
            "extra": "mean: 7.932173837800008 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.18020555290123688,
            "unit": "iter/sec",
            "range": "stddev: 0.010343060879391804",
            "extra": "mean: 5.549218566799982 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "683fe71d76d21af76b7f36527e74f3bf1264f12b",
          "message": "Add test to ensure writes in ReadWrite behave properly in all cases",
          "timestamp": "2024-08-26T22:01:24-05:00",
          "tree_id": "7a280b4794e8ecf1f64276a561abfc566325ad93",
          "url": "https://github.com/cocotb/cocotb/commit/683fe71d76d21af76b7f36527e74f3bf1264f12b"
        },
        "date": 1724727897096,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12686663483827712,
            "unit": "iter/sec",
            "range": "stddev: 0.073431880939943",
            "extra": "mean: 7.882293096800015 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.18066336787316822,
            "unit": "iter/sec",
            "range": "stddev: 0.050463693530775997",
            "extra": "mean: 5.535156417000008 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "24aec6f469f4b62f680104aeb0722a00740f9e94",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.6.1 → v0.6.2](https://github.com/astral-sh/ruff-pre-commit/compare/v0.6.1...v0.6.2)\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.08.19 → 2024.08.26](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.08.19...2024.08.26)",
          "timestamp": "2024-08-27T10:07:05+02:00",
          "tree_id": "f862810143ede6f6c95cb7fad0bd0a89fda5a2ea",
          "url": "https://github.com/cocotb/cocotb/commit/24aec6f469f4b62f680104aeb0722a00740f9e94"
        },
        "date": 1724746284173,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12659461039211853,
            "unit": "iter/sec",
            "range": "stddev: 0.05836193388909434",
            "extra": "mean: 7.899230440399992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1797941796994349,
            "unit": "iter/sec",
            "range": "stddev: 0.05430923619883458",
            "extra": "mean: 5.5619153059999915 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "828d127e8e865fc2ecf4979ea54767e1da80dd21",
          "message": "Fix memory leak of Python callbacks\n\nThis leak occurs when a trigger is deregistered before it fires.\nThe callback is cleaned up if it did fire. The trigger._unprime method\nhad to be split up so that triggers that fired weren't attempted to be\nderegistered (_unprime) more than once. Fired triggers just run\n_cleanup.",
          "timestamp": "2024-08-27T10:54:38-05:00",
          "tree_id": "0d02d60183e41a992380cd9cd514cf0e00f4ea4f",
          "url": "https://github.com/cocotb/cocotb/commit/828d127e8e865fc2ecf4979ea54767e1da80dd21"
        },
        "date": 1724774303830,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12655333456077789,
            "unit": "iter/sec",
            "range": "stddev: 0.04939894144454224",
            "extra": "mean: 7.901806803199998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.18016808430529951,
            "unit": "iter/sec",
            "range": "stddev: 0.0487840098947539",
            "extra": "mean: 5.550372608199984 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "00e61e3f83f84abca3cae3c1e5e19a0248b922ea",
          "message": "Fix re-entrancy issue with setimmediatevalue and Edge triggers on Icarus and Xcelium",
          "timestamp": "2024-08-27T21:28:12-05:00",
          "tree_id": "6759206aaefd5ee6099bfc3778f2fa8990896f59",
          "url": "https://github.com/cocotb/cocotb/commit/00e61e3f83f84abca3cae3c1e5e19a0248b922ea"
        },
        "date": 1724812329994,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12753203540376676,
            "unit": "iter/sec",
            "range": "stddev: 0.05097451399583016",
            "extra": "mean: 7.8411670984000015 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17991369835739818,
            "unit": "iter/sec",
            "range": "stddev: 0.041625976642814165",
            "extra": "mean: 5.558220464200019 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "b431ff884080ae1b4afddc2fbb2cebd6af155430",
          "message": "Change Verilator expectation of ReadWrite in ReadWrite",
          "timestamp": "2024-08-28T08:23:42-05:00",
          "tree_id": "a3b85abeec2e883a894b8ba6c3a97100d472d085",
          "url": "https://github.com/cocotb/cocotb/commit/b431ff884080ae1b4afddc2fbb2cebd6af155430"
        },
        "date": 1724851639356,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12707328274497726,
            "unit": "iter/sec",
            "range": "stddev: 0.0854337022622485",
            "extra": "mean: 7.869474829000012 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17911601572672156,
            "unit": "iter/sec",
            "range": "stddev: 0.06471269230576485",
            "extra": "mean: 5.582973671799993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anolte@hudson-trading.com",
            "name": "Andrew Nolte",
            "username": "AndrewNolte"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00e8b0ca7736c562caf89a1992c24bf11ea8c144",
          "message": "Simplify VpiArrayObjHdl::initialise (#3624)",
          "timestamp": "2024-08-28T09:10:15-06:00",
          "tree_id": "ec2a5056a033df757fa470972da23d585533c91c",
          "url": "https://github.com/cocotb/cocotb/commit/00e8b0ca7736c562caf89a1992c24bf11ea8c144"
        },
        "date": 1724858083618,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12764858982566846,
            "unit": "iter/sec",
            "range": "stddev: 0.04740023293755553",
            "extra": "mean: 7.8340074211999875 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17919755653299554,
            "unit": "iter/sec",
            "range": "stddev: 0.08703811795274237",
            "extra": "mean: 5.580433234399993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "3925bd55031a3adbe7511278f60d3846f1f88944",
          "message": "Deregister _Event with Event and _Lock with Lock on unprime",
          "timestamp": "2024-08-31T15:12:33-05:00",
          "tree_id": "64cb9785f19582a733f59f081e9a676dfe39ca92",
          "url": "https://github.com/cocotb/cocotb/commit/3925bd55031a3adbe7511278f60d3846f1f88944"
        },
        "date": 1725135390679,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1267935436714276,
            "unit": "iter/sec",
            "range": "stddev: 0.05552960754550886",
            "extra": "mean: 7.886836908599991 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17799582221698157,
            "unit": "iter/sec",
            "range": "stddev: 0.05719387232678149",
            "extra": "mean: 5.618109389000006 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "4949e2037d09017c292679239a0ce66fc7bbc882",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.6.2 → v0.6.3](https://github.com/astral-sh/ruff-pre-commit/compare/v0.6.2...v0.6.3)",
          "timestamp": "2024-09-02T19:48:43-05:00",
          "tree_id": "e2b27951effab731aa00b3b275fab3bb0b0858fc",
          "url": "https://github.com/cocotb/cocotb/commit/4949e2037d09017c292679239a0ce66fc7bbc882"
        },
        "date": 1725324733669,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1273435956002478,
            "unit": "iter/sec",
            "range": "stddev: 0.03997852288498422",
            "extra": "mean: 7.852770257400005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17967060491750267,
            "unit": "iter/sec",
            "range": "stddev: 0.06779655084785145",
            "extra": "mean: 5.565740708999999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "1cdfdfeb9b75f25d980b2bc5a31924397fe4d3c9",
          "message": "Rename cocotb.parameterize to cocotb.parametrize",
          "timestamp": "2024-09-03T20:16:41-05:00",
          "tree_id": "d6ca347e4dfb65beeec8507ae3f909d9b602d1ed",
          "url": "https://github.com/cocotb/cocotb/commit/1cdfdfeb9b75f25d980b2bc5a31924397fe4d3c9"
        },
        "date": 1725412830509,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12648727217769795,
            "unit": "iter/sec",
            "range": "stddev: 0.09196406189324897",
            "extra": "mean: 7.905933797 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17873392610341776,
            "unit": "iter/sec",
            "range": "stddev: 0.06159239438948563",
            "extra": "mean: 5.594908710399989 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "815daedabf6b52d09fb337272504a8646681e5da",
          "message": "Apply writes done in ReadWrite phase immediately\n\nPreviously this scheduled writes until the next ReadWrite, but that\ndoesn't seem particularly useful and can even put the user into a bad\nsituation where there is no other ReadWrite phase in the time step and\nthe writes are applied inadvertently on the next time step.",
          "timestamp": "2024-09-06T11:20:57-05:00",
          "tree_id": "b3f6355c80ac4ab86dd582e2e8587bee32643525",
          "url": "https://github.com/cocotb/cocotb/commit/815daedabf6b52d09fb337272504a8646681e5da"
        },
        "date": 1725639873152,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12784570678435056,
            "unit": "iter/sec",
            "range": "stddev: 0.030825151907426816",
            "extra": "mean: 7.821928676000004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.18079581743906972,
            "unit": "iter/sec",
            "range": "stddev: 0.040192056996714576",
            "extra": "mean: 5.5311014058000065 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "31b46a27f9f9838ad12c73fc148f11455210ccce",
          "message": "Touchup typing and docs in Range",
          "timestamp": "2024-09-06T12:40:37-05:00",
          "tree_id": "6850b71638d5a1a1875b39e5482bcb590176290b",
          "url": "https://github.com/cocotb/cocotb/commit/31b46a27f9f9838ad12c73fc148f11455210ccce"
        },
        "date": 1725644657328,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12629057515781972,
            "unit": "iter/sec",
            "range": "stddev: 0.059008595357820014",
            "extra": "mean: 7.918247254399978 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17709124425673473,
            "unit": "iter/sec",
            "range": "stddev: 0.04650157132546179",
            "extra": "mean: 5.646806561199992 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "da7d4237a5bc853950cad63144487719ee071176",
          "message": "Add (deprecated) __bool__ cast for LogicArray\n\nThis was done for backwards compatibility using the same semantics as\nBinaryValue.\n\nThere are many possible reasonable implementations of value checking:\n* all values == logical 1\n* any value == logical 1\n* `or` reduction of value == logical 1\n\nWe should refuse the temptation to guess (as Verilog has done) and have\nusers *explicitly* mention the behavior they are looking for, so this\nwas deprecated.",
          "timestamp": "2024-09-06T18:06:34-05:00",
          "tree_id": "d01c2d213ec3571abb3812a4214eb13f2844b26c",
          "url": "https://github.com/cocotb/cocotb/commit/da7d4237a5bc853950cad63144487719ee071176"
        },
        "date": 1725664205747,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1274081816006753,
            "unit": "iter/sec",
            "range": "stddev: 0.03737204734859088",
            "extra": "mean: 7.848789515999965 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1808116316058968,
            "unit": "iter/sec",
            "range": "stddev: 0.04801418054309353",
            "extra": "mean: 5.530617643999994 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cmarqu42@gmail.com",
            "name": "Colin Marquardt",
            "username": "cmarqu"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "fdb288f72c2115ca36216218226368a9f11f685a",
          "message": "Enable Python 3.13 builds\n\nUpdate cibuildwheel to build wheels for Python 3.13, which now had its final release\ncandidate and will not see any more changes to its ABI.\nAlso update the CI configuration to build Python 3.13 by default for all\nbuilds, not only the experimental ones.",
          "timestamp": "2024-09-09T20:22:31+02:00",
          "tree_id": "13974fa365fdd0bd3f16771367395ac0a3a9b304",
          "url": "https://github.com/cocotb/cocotb/commit/fdb288f72c2115ca36216218226368a9f11f685a"
        },
        "date": 1725906370755,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12535932830824983,
            "unit": "iter/sec",
            "range": "stddev: 0.04656304221323164",
            "extra": "mean: 7.977068906599993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1776124949054524,
            "unit": "iter/sec",
            "range": "stddev: 0.040136154859276775",
            "extra": "mean: 5.630234519999988 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}