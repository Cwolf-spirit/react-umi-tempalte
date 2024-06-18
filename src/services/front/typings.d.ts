declare namespace API {
  type AdminLoginRequest = {
    /** 用户名 */
    username: string;
    /** 密码 */
    password: string;
  };

  type AdminLoginResponse = {
    /** token */
    token?: string;
    /** AdminUser 用户 */
    user?: {
      id?: number;
      nickname?: string;
      username?: string;
      email?: string;
      phone?: string;
      remark?: string;
      role_id?: number;
      is_super_admin?: number;
      status?: number;
      delete_status?: number;
      login_time?: string;
      login_ip?: string;
      created_at?: string;
      updated_at?: string;
    };
  };

  type AdminStatisticResponse = {
    /** 更新时间 */
    updateTime?: string;
    /** 账号数 */
    companyTotal?: number;
    /** 昨日新建 */
    companyYesterdayTotal?: number;
    /** 权益消费量 */
    dataCountUsed?: number;
    /** 昨日传输 */
    yesterdayDataCount?: number;
    /** 付款总金额 */
    dataAmountTotal?: number;
    /** 累计作品计费金额 */
    dataCountAmount?: number;
    /** 累计汇总计费金额 */
    dataSummaryAmount?: number;
    /** 汇总传输次数 */
    dataSummaryUsed?: number;
    /** 昨日传输 */
    yesterdaySummaryCount?: number;
    /** 正常账号数 */
    companyNormalTotal?: number;
    /** 非正常账号数 */
    companyUnNormalTotal?: number;
    /** 方案来源 */
    planCreateBy?: PlanCreateBy[];
    /** 累计传输量Top10的账号 */
    companyTop10?: CompanyTop10[];
    /** 累计传输量Top10的方案 */
    planDataCountUsedTop10?: PlanDataCountUsedTop10[];
  };

  type BatchCreateDirectDetailRequest = {
    /** 信源组id */
    direct_id?: number;
    /** 信源 */
    direct_detail_list?: DirectDetailBase[];
  };

  type BatchCreateDirectResponse = {
    /** 成功添加条数 */
    insert_count?: number;
    /** 不存在库中导致添加失败的数据 */
    not_exists?: DirectDetailBase[];
  };

  type BatchDeleteRequest = {
    /** 信源组id */
    direct_id?: number;
    /** 信源明细id 最多100 */
    direct_detail_id?: number[];
  };

  type Company = {
    /** 公司ID */
    company_id?: string;
    /** 公司名称 */
    company_name?: string;
    /** 备注 */
    remark?: string;
    /** 客户端键 */
    client_key?: string;
    /** 客户端密钥 */
    client_secret?: string;
    /** api登录时间 */
    login_time?: string;
    /** api登录IP */
    login_ip?: string;
    /** 传输类型 1 api, 2 kafka */
    transfer_type?: number;
    /** 权益量传输总量限制(去重，同一作品只算一次) */
    data_count_limit?: number;
    /** 权益量已经使用 */
    data_count_used?: number;
    /** 作品传输量限制(不去重，一条消息一次) */
    message_count_limit?: number;
    /** 作品传输量已经使用 */
    message_count_used?: number;
    /** 每日数据量限制 */
    data_count_limit_day?: number;
    /** 每月数据量限制 */
    data_count_limit_month?: number;
    /** 汇总次数限制 */
    data_summary_limit?: number;
    /** 汇总量已经使用 */
    data_summary_used?: number;
    /** 方案数量限制 */
    plan_count_limit?: number;
    /** 方案数量已使用 */
    plan_count?: number;
    /** 账户有效期至 */
    account_validity_until?: string;
    /** 状态（1 - 正常, 2 - 禁用） */
    status?: number;
    /** 删除状态（1 - 未删除, 2 - 已删除） */
    delete_status?: number;
    /** 创建时间 */
    created_at?: string;
    /** 更新时间 */
    updated_at?: string;
    /** 当天已使用数据量 */
    data_count_day_used?: number;
    /** 当月已使用数据量 */
    data_count_month_used?: number;
  };

  type CompanyDetailResponse =
    // #/components/schemas/Company
    Company & {
      manager?: WebUser;
    };

  type CompanyId = {
    /** 公司id */
    company_id?: string;
  };

  type CompanyListItem = {
    /** 客户ID */
    cid?: number;
    /** 账号ID */
    company_id?: string;
    /** 公司名称 */
    company_name?: string;
    /** 客户端键 */
    client_key?: string;
    /** 客户端密钥 */
    client_secret?: string;
    /** 状态（1 - 正常, 2 - 禁用） */
    status?: number;
    /** 账户有效期至 */
    account_validity_until?: string;
    /** 权益消费量限制 */
    data_count_limit?: number;
    /** 已用权益消费量 */
    data_count_used?: number;
    /** 每日数据量限制 */
    data_count_limit_day?: number;
    /** 每月数据量限制 */
    data_count_limit_month?: number;
    /** 汇总传输次数限制 */
    data_summary_limit?: number;
    /** 已用汇总传输次数 */
    data_summary_used?: number;
    /** 消息量限制 */
    message_count_limit?: number;
    /** 已使用消息量 */
    message_count_used?: number;
    /** 方案数限制 */
    plan_count_limit?: number;
    /** 创建时间 */
    created_at?: string;
    /** 更新时间 */
    updated_at?: string;
    /** 唯一规则URL，暂时废弃 */
    distinct_rule_url?: number;
    /** 唯一规则客户端 */
    distinct_rule_client?: number;
    /** 用户ID */
    uid?: number;
    /** Web用户ID */
    web_user_id?: string;
    /** 账号名称 */
    nickname?: string;
    /** 登录账号 */
    username?: string;
    /** 已建方案数 */
    plan_count?: number;
    /** 作品计费金额 */
    data_count_amount?: number;
    /** 消息量金额-暂未用到 */
    message_count_amount?: number;
    /** 汇总计费金额 */
    data_summary_amount?: number;
    /** 付款总金额 */
    pay_record_sum_pay_amount?: number;
  };

  type CompanyListRequest =
    // #/components/schemas/PaginationRequest
    PaginationRequest & {
      /** 名称 */
      keyword?: string;
      /** key */
      client_key?: string;
      /** secret */
      client_secret?: string;
      /** 1正常 2禁用 */
      status?: string;
    };

  type CompanyListResponse =
    // #/components/schemas/Pagination
    Pagination & {
      /** 公司列表 */
      list?: CompanyListItem[];
    };

  type CompanyRequest = {
    /** 用户名 */
    nickname?: string;
    /** 登录名 */
    username?: string;
    /** password */
    password?: string;
    /** 公司名称 */
    company_name?: string;
    /** 备注 */
    remark?: string;
    /** 权益量限制 */
    data_count_limit?: number;
    /** 每日数据量限制 */
    data_count_limit_day?: number;
    /** 每月数据量限制 */
    data_count_limit_month?: number;
    /** 汇总次数限制 */
    data_summary_limit?: number;
    /** 方案数量限制 */
    plan_count_limit?: number;
    /** 去重规则url：1推送 2不推送，暂时废弃 */
    distinct_rule_url?: number;
    /** 传输模式：1 api 2 kafka */
    transfer_type?: number;
    /** 权益量系数 */
    data_count_ratio?: number;
    /** 汇总次数系数 */
    data_summary_ratio?: number;
    /** 去重规则sima web app 1推送2不推送 */
    distinct_rule_client?: number;
    /** 账户有效期至 */
    account_validity_until?: string;
  };

  type CompanyTop10 = {
    /** 账号名称 */
    company_name?: string;
    /** 权益消费量 */
    data_count_used?: number;
    /** 汇总传输次数 */
    data_summary_used?: number;
    /** 创建时间 */
    created_at?: string;
    /** 方案数 */
    plan_count?: number;
  };

  type CompanyUpdateRequest =
    // #/components/schemas/CompanyId
    CompanyId &
      // #/components/schemas/CompanyRequest
      CompanyRequest;

  type DirectDetailBase = {
    /** 信源平台号 */
    user_id?: string;
    /** 信源昵称 */
    nickname?: string;
    /** 信源平台 */
    platform?: string;
    /** 信源二级平台 */
    platform_name?: string;
    /** 信源网址 */
    main_domain?: string;
    /** 是否添加到指定信源组,1是2否。仅search_users接口返回 */
    is_added?: number;
  };

  type DirectDetailList =
    // #/components/schemas/DirectDetailBase
    DirectDetailBase & {
      /** id */
      id?: number;
      /** 信源组id */
      direct_id?: number;
      /** 创建方式1 手动 2 api 3 后台 */
      create_by?: number;
      /** 是否删除 1未删除 2已删除 仅明细记录接口有 */
      delete_status?: number;
      /** 删除时间 仅明细记录接口有 */
      deleted_at?: string;
      /** 创建时间 */
      created_at?: string;
      /** 更新时间 */
      updated_at?: string;
    };

  type DirectDetailListResponse =
    // #/components/schemas/Pagination
    Pagination & {
      /** 信源明细 */
      list?: DirectDetailList[];
    };

  type DirectId = {
    /** 信源组名称 */
    direct_id?: number;
  };

  type DirectList =
    // #/components/schemas/OneDirect
    OneDirect & {
      /** 信源数 */
      direct_detail_count?: number;
      /** 创建时间 */
      created_at?: string;
      /** 更新时间 */
      updated_at?: string;
    };

  type DirectListRequest =
    // #/components/schemas/PaginationRequest
    PaginationRequest & {
      /** 信源组名称 */
      direct_name?: string;
    };

  type DirectListResponse =
    // #/components/schemas/Pagination
    Pagination & {
      /** 信源列表 */
      list?: DirectList[];
    };

  type OneDirect = {
    /** 信源组id */
    direct_id?: number;
    /** 信源组名称 */
    direct_name?: string;
  };

  type Pagination = {
    /** 当前页码 */
    page?: number;
    /** 每页数量 */
    page_size?: number;
    /** 总条目数 */
    total?: number;
  };

  type PaginationRequest = {
    /** 当前页码，默认为1 */
    page?: number;
    /** 每页数量，默认为10 */
    page_size?: number;
  };

  type PayRecord = {
    /** id */
    id?: number;
    /** 公司ID */
    company_id?: string;
    /** 合同编号 */
    contract_no?: string;
    /** 支付时间 */
    pay_time?: string;
    /** 支付金额 */
    pay_amount?: string;
  };

  type PayRecordListItem =
    // #/components/schemas/PayRecord
    PayRecord & {
      /** id */
      id?: number;
      /** 创建时间 */
      created_at?: string;
      /** 更新时间 */
      updated_at?: string;
    };

  type PayRecordListRequest =
    // #/components/schemas/CompanyId
    CompanyId &
      // #/components/schemas/PaginationRequest
      PaginationRequest;

  type PayRecordListResponse =
    // #/components/schemas/Pagination
    Pagination & {
      /** 合同列表 */
      list?: PayRecordListItem[];
    };

  type PlanBatchExcludeDirectRequest = {
    /** 方案plan_id 最多20个 */
    plan_ids: string[];
    /** 排除信源id 最多5个 */
    exclude_direct_ids: number[];
  };

  type PlanCreateBy = {
    /** 方案数量 */
    plan_count?: number;
    /** 创建方式 1 手动 2 api */
    create_by?: number;
  };

  type PlanDailyRequest =
    // #/components/schemas/PaginationRequest
    PaginationRequest &
      // #/components/schemas/PlanId
      PlanId & {
        /** 日志类型 1作品 2汇总 */
        log_type?: string;
      };

  type PlanDailyResponse = {
    /** 日期 */
    date?: string;
    /** 传输量 */
    date_count?: number;
  };

  type PlanDataCountUsedTop10 = {
    /** 方案id */
    plan_id?: string;
    /** 方案名 */
    plan_name?: string;
    /** 所属账号 */
    company_name?: string;
    /** 公司id */
    company_id?: string;
    /** 方案类型,1历史方案 2实时方案 */
    data_type?: number;
    /** 开始时间 */
    time_begin?: string;
    /** 结束时间 */
    time_end?: string;
    /** 单方案权益消费量 */
    data_count_used?: number;
  };

  type PlanDetail = {
    /** 方案ID */
    plan_id?: string;
    /** 公司ID */
    company_id?: string;
    /** Web用户ID */
    web_user_id?: string;
    /** 创建方式 */
    create_by?: number;
    /** 状态 0：未开始 1：进行中 2：暂停 3：已结束 5：已过期 */
    status?: number;
    /** 作品传输数 */
    transform_count_post?: number;
    /** 汇总传输数 */
    transform_count_summary?: number;
    /** 创建时间 */
    created_at?: string;
    /** 更新时间 */
    updated_at?: string;
    /** 方案名称 */
    plan_name?: string;
    /** 数据类型 */
    data_type?: number;
    /** 开始时间 */
    time_begin?: string;
    /** 结束时间 */
    time_end?: string;
    /** 过滤平台 */
    filter_platform?: string[];
    /** 过滤平台名称 */
    filter_platform_name?: string[];
    /** 定向信源 */
    direct_id?: number[];
    /** 排除信源 */
    exclude_direct_id?: number[];
    /** 是否开启内容设置 */
    is_open_content_setting?: number;
    /** 前端地区二维数组 */
    word_region_full?: number[][];
    /** 地区 */
    word_region?: { code?: string; name?: string }[];
    /** 模式 */
    type?: number;
    /** 关键词 */
    word?: string[];
    /** 事件关键词 */
    word_event?: string[];
    /** 排除关键词 */
    word_exclude?: string[];
    /** 关键词组合 */
    word_combination?: string;
    /** 信息属性 */
    filter_sentiment?: number[];
    /** 精确情感 */
    precise_sentiment?: number;
    /** 信息类型 */
    filter_original?: number[];
    /** 信息内容 */
    reduce_noise?: number;
    /** 信息级别 */
    filter_source_level?: string[];
    /** 信息数据 */
    filter_post_category?: number;
    /** 关键词匹配 */
    filter_hit_field?: string[];
    /** 关注地域匹配 */
    filter_hit_region?: string[];
    /** 认证类型 */
    filter_verify?: string[];
  };

  type PlanFormResponse = {
    /** 平台 */
    filter_platform?: Record<string, any>;
    /** 平台名称/二级平台 */
    filter_platform_name?: Record<string, any>;
    /** 认证类型 */
    filter_verify?: Record<string, any>;
    /** 信息属性 */
    filter_sentiment?: Record<string, any>;
    /** 精确情感 */
    precise_sentiment?: Record<string, any>;
    /** 信息类型 */
    filter_original?: Record<string, any>;
    /** 信息内容 */
    reduce_noise?: Record<string, any>;
    /** 信息级别 */
    filter_source_level?: Record<string, any>;
    /** 信息数据 */
    filter_post_category?: Record<string, any>;
    /** 关键词匹配 */
    filter_hit_field?: Record<string, any>;
    /** 关注地域匹配 */
    filter_hit_region?: Record<string, any>;
  };

  type PlanId = {
    /** 方案名称 */
    plan_id?: string;
  };

  type PlanListRequest =
    // #/components/schemas/PaginationRequest
    PaginationRequest & {
      /** 方案名称 */
      plan_name?: string;
      /** 创建方式 1 手动 2 api */
      create_by?: number;
      /** 方案状态 0：未开始 1：进行中 2：暂停 3：已结束 */
      status?: number;
      /** 日志类型，1：旧数据，2：新数据 */
      data_type?: number;
    };

  type PlanListResponse =
    // #/components/schemas/Pagination
    Pagination & {
      /** 方案列表 */
      list?: PlanDetail[];
    };

  type PlanRequest = {
    /** 方案名称 */
    plan_name?: string;
    /** 数据类型 */
    data_type?: number;
    /** 开始时间 */
    time_begin?: string;
    /** 结束时间 */
    time_end?: string;
    /** 过滤平台 */
    filter_platform?: string[];
    /** 过滤平台名称 */
    filter_platform_name?: string[];
    /** 定向信源 */
    direct_id?: number[];
    /** 排除信源 */
    exclude_direct_id?: number[];
    /** 是否开启内容设置 */
    is_open_content_setting?: number;
    /** 前端地区二维数组 */
    word_region_full?: number[][];
    /** 地区 */
    word_region?: { code?: string; name?: string }[];
    /** 模式 */
    type?: number;
    /** 关键词 */
    word?: string[];
    /** 事件关键词 */
    word_event?: string[];
    /** 排除关键词 */
    word_exclude?: string[];
    /** 关键词组合 */
    word_combination?: string;
    /** 信息属性 */
    filter_sentiment?: number[];
    /** 精确情感 */
    precise_sentiment?: number;
    /** 信息类型 */
    filter_original?: number[];
    /** 信息内容 */
    reduce_noise?: number;
    /** 信息级别 */
    filter_source_level?: string[];
    /** 信息数据 */
    filter_post_category?: number;
    /** 关键词匹配 */
    filter_hit_field?: string[];
    /** 关注地域匹配 */
    filter_hit_region?: string[];
    /** 认证类型 */
    filter_verify?: string[];
  };

  type PlanUpdateRequest =
    // #/components/schemas/PlanId
    PlanId &
      // #/components/schemas/PlanRequest
      PlanRequest;

  type RegionResponse = {
    /** code */
    code?: string;
    /** 名称关键词 */
    name?: string;
    /** 名称关键词 */
    keyword?: string;
    /** 前端显示名称 */
    full_name?: string;
    /** 层级 */
    level?: number;
    /** 子树 */
    children?: RegionResponse[];
  };

  type RequestLogList = {
    /** 方案名 */
    plan_name?: string;
    /** 用户名 */
    nickname?: string;
    /** 登录名 */
    username?: string;
    /** id */
    id?: number;
    /** 方案id */
    plan_id?: string;
    /** 公司id */
    company_id?: string;
    /** 请求类型 */
    log_type?: number;
    /** 日志类型 */
    data_type?: number;
    /** 前台用户id */
    web_user_id?: string;
    /** ip地址 */
    ip?: string;
    /** 请求参数 */
    request?: string;
    /** 响应条数 */
    response_count?: number;
    /** 响应数据 */
    response?: string;
    /** 请求时间 */
    request_time?: string;
  };

  type RequestLogListRequest =
    // #/components/schemas/PaginationRequest
    PaginationRequest & {
      /** 记录名称 */
      plan_name?: string;
      /** 账号名称 */
      web_username?: string;
      /** 请求类型，1：post请求，2：summary请求 */
      log_type?: number;
      /** 日志类型，1：旧数据，2：新数据 */
      data_type?: number;
    };

  type RequestLogListResponse =
    // #/components/schemas/Pagination
    Pagination & {
      /** 请求日志列表 */
      list?: RequestLogList[];
    };

  type RequestLogPlanItem = {
    /** 方案名 */
    plan_name?: string;
    /** 用户名 */
    nickname?: string;
    /** 登录名 */
    username?: string;
    /** id */
    id?: number;
    /** 方案id */
    plan_id?: string;
    /** 公司id */
    company_id?: string;
    /** 创建方式 1 手动 2 api */
    create_by?: number;
    /** 操作类型，1创建，2删除, 3更新, 4 禁用, 5 开启 */
    operate_type?: number;
    /** 方案完整信息--与detail接口一致，如果是创建，就是创建成功的记录 */
    plan_info?: any;
    /** 变更信息 */
    changes?: any;
    /** 请求时间 */
    created_at?: string;
  };

  type RequestLogPlanRequest =
    // #/components/schemas/PaginationRequest
    PaginationRequest & {
      /** 记录名称 */
      plan_name?: string;
      /** 账号名称 */
      web_username?: string;
      /** 创建方式，1：前台，2：api */
      create_by?: number;
      /** 操作类型，1创建，2删除, 3更新, 4 禁用, 5 开启 */
      operate_type?: number;
    };

  type RequestLogPlanResponse =
    // #/components/schemas/Pagination
    Pagination & {
      /** 方案日志列表 */
      list?: RequestLogPlanItem[];
    };

  type ResetPasswordRequest = {
    /** 旧密码 */
    old_password: string;
    /** 新密码 */
    new_password: string;
  };

  type SearchUsersRequest =
    // #/components/schemas/PaginationRequest
    PaginationRequest & {
      /** 信源id */
      direct_id?: string;
      /** 信源平台 */
      platform?: string;
      /** 昵称关键词，keyword, user_id, main_domain输入一个 */
      keyword?: string;
      /** 信源平台号 */
      user_id?: string;
      /** 信源网址 */
      main_domain?: string;
    };

  type SearchUsersResponse =
    // #/components/schemas/Pagination
    Pagination & {
      /** 基础信源库列表 */
      list?: DirectDetailBase[];
    };

  type StatisticListRequest =
    // #/components/schemas/StatisticTrendRequest
    StatisticTrendRequest &
      // #/components/schemas/PaginationRequest
      PaginationRequest;

  type StatisticTrendRequest = {
    /** 统计类型， 1天， 2月，默认按天统计 */
    statistic_type?: number;
    /** 开始时间 */
    date_begin?: string;
    /** 结束时间 */
    date_end?: string;
  };

  type TotalDataResponse = {
    /** 传输量总计 */
    total_count?: number;
  };

  type WebStatisticListItem = {
    /** plan_id */
    plan_id?: string;
    /** 日期 */
    date?: string;
    /** 单方案权益消费量 */
    data_count?: number;
    /** 汇总传输次数 */
    summary_count?: number;
    /** 方案名称 */
    plan_name?: string;
  };

  type WebStatisticListResponse =
    // #/components/schemas/Pagination
    Pagination & {
      /** 单方案次数 */
      list?: WebStatisticListItem[];
    };

  type WebStatisticResponse = {
    /** 更新时间 */
    updateTime?: string;
    /** 权益消费量上限 */
    data_count_limit?: number;
    /** 已用权益消费量 */
    data_count_used?: number;
    /** 剩余权益消费量 */
    data_count_left?: number;
    /** 方案上限 */
    plan_count_limit?: number;
    /** 已建方案数 */
    plan_count_used?: number;
    /** 昨日消费量 */
    date_count_yesterday?: number;
  };

  type WebStatisticTrendResponse = {
    /** 日期 */
    date?: string;
    /** 权益消费量 */
    data_count?: number;
  };

  type WebUser = {
    /** 用户ID */
    web_user_id?: string;
    /** 昵称 */
    nickname?: string;
    /** 头像URL */
    avatar?: string;
    /** 用户名 */
    username?: string;
    /** 电子邮件 */
    email?: string;
    /** 电话号码 */
    phone?: string;
    /** 备注 */
    remark?: string;
    /** 角色ID */
    role_id?: number;
    /** 是否是主账号，主账号随公司创建， 1 是 2 否 */
    is_super_admin?: number;
    /** 状态：1正常，2禁用 */
    status?: number;
    /** 删除状态（1 - 未删除, 2 - 已删除） */
    delete_status?: number;
    /** 登录时间 */
    login_time?: string;
    /** 登录IP */
    login_ip?: string;
    /** 创建时间 */
    created_at?: string;
    /** 更新时间 */
    updated_at?: string;
  };

  type WebUserDetailResponse =
    // #/components/schemas/WebUser
    WebUser & {
      company?: Company;
    };

  type WebUserLoginResponse = {
    /** token */
    token?: string;
    user?: WebUser;
  };
}
