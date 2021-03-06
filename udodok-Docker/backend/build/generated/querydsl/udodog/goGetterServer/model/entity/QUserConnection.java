package udodog.goGetterServer.model.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QUserConnection is a Querydsl query type for UserConnection
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QUserConnection extends EntityPathBase<UserConnection> {

    private static final long serialVersionUID = 1342289033L;

    public static final QUserConnection userConnection = new QUserConnection("userConnection");

    public final StringPath accessToken = createString("accessToken");

    public final StringPath displayName = createString("displayName");

    public final StringPath email = createString("email");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath imageUrl = createString("imageUrl");

    public final EnumPath<udodog.goGetterServer.model.enumclass.oauth.SocialLoginType> provider = createEnum("provider", udodog.goGetterServer.model.enumclass.oauth.SocialLoginType.class);

    public final StringPath providerId = createString("providerId");

    public QUserConnection(String variable) {
        super(UserConnection.class, forVariable(variable));
    }

    public QUserConnection(Path<? extends UserConnection> path) {
        super(path.getType(), path.getMetadata());
    }

    public QUserConnection(PathMetadata metadata) {
        super(UserConnection.class, metadata);
    }

}

